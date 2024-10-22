import { StateCreator } from "zustand";
import {
  fecthByCharacter,
  fecthByCharacterByName,
} from "../services/MarvelService";
import { character, characterType } from "../types/MarvelSchema";

export type characterSliceType = {
  characterData: characterType;
  charLoading: boolean;
  character: character;
  fetchCarater: () => Promise<void>;
  fetchByNameCharacter: (searchQuery: string) => Promise<void>;
  setUniqueCharacter: (character: character) => void;
};

export const initialCharacterState = {
  count: 0,
  limit: 0,
  offset: 0,
  results: [
    {
      id: 0,
      name: "",
      description: "",
      thumbnail: {
        extension: "",
        path: "",
      },
      comics: {
        items: [
          {
            resourceURI: "",
            name: "",
          },
        ],
      },
      series: {
        items: [
          {
            resourceURI: "",
            name: "",
          },
        ],
      },
    },
  ],
};
export const createCharacterSlice: StateCreator<characterSliceType> = (
  set
) => ({
  character: {} as character,
  characterData: initialCharacterState,
  charLoading: false,
  fetchCarater: async () => {
    set(() => ({
      charLoading: true,
    }));
    const result = await fecthByCharacter();
    set(() => ({
      characterData: result,
      charLoading: false,
    }));
  },
  fetchByNameCharacter: async (searchQuery) => {
    set(() => ({
      charLoading: true,
    }));
    const result = await fecthByCharacterByName(searchQuery);
    set(() => ({
      characterData: result,
      charLoading: false,
    }));
  },
  setUniqueCharacter: (character) => {
    set(() => ({
      character,
    }));
  },
});
