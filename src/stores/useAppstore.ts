import { create } from "zustand";
import { createComicSlice, comicSliceType } from "./comicSlice";
import { createCharacterSlice, characterSliceType } from "./characterSlice";
import { devtools, persist } from "zustand/middleware"; // Importa persist

export const useAppStore = create<characterSliceType & comicSliceType>()(
  devtools(
    persist(
      (...a) => ({
        ...createComicSlice(...a),
        ...createCharacterSlice(...a),
      }),
      {
        name: "app-store",
      }
    )
  )
);
