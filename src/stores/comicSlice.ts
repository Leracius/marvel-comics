import { StateCreator } from "zustand";
import { MarvelType } from "../schemas/MarvelSchema";
import { fetchMarvel } from "../services/MarvelService";

export type comicSliceType = {
  MarvelData: MarvelType;
  loading: boolean;
  offset: number;
  character: string;
  fecthData: (offset: number, character: string) => Promise<void>;
  fecthPrev: (offset: number, character: string) => Promise<void>;
  setCharacter: (character: string) => void;
};

export const createComicSlice: StateCreator<comicSliceType> = (set) => ({
  MarvelData: {} as MarvelType,
  loading: false,
  offset: 0,
  character: "",
  setCharacter: (character) => {
    set(() => ({
      character: character,
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
      character: character,
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
