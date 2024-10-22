import { StateCreator } from "zustand";
import { MarvelType } from "../types/MarvelSchema";
import { fetchMarvel } from "../services/MarvelService";

export type comicSliceType = {
  MarvelData: MarvelType;
  loading: boolean;
  offset: number;
  characterComic: string;
  fecthData: (offset: number, character: string) => Promise<void>;
  fecthPrev: (offset: number, character: string) => Promise<void>;
  setCharacter: (character: string) => void;
};

const initial = {
  count: 0,
  limit: 10,
  offset: 0,
  results: [
    {
      id: 0,
      title: "",
      thumbnail: {
        extension: "",
        path: "",
      },
    },
  ],
};

export const createComicSlice: StateCreator<comicSliceType> = (set) => ({
  MarvelData: initial,
  loading: false,
  offset: 0,
  characterComic: "",
  setCharacter: (character) => {
    set(() => ({
      characterComic: character,
      offset: 0,
    }));
  },
  fecthData: async (offset, character) => {
    set(() => ({
      loading: true,
    }));
    const result = await fetchMarvel(offset + 20, character);
    set(() => ({
      MarvelData: result,
      offset: result?.offset,
      loading: false,
      characterComic: character,
    }));
  },
  fecthPrev: async (offset, character) => {
    if (offset > 0) {
      set(() => ({
        loading: true,
      }));
      const result = await fetchMarvel(offset - 20, character);
      set(() => ({
        MarvelData: result,
        offset: result?.offset,
        loading: false,
        // character: character
      }));
    } else {
      console.log("no hay paginas anteriores por ver");
    }
  },
});
