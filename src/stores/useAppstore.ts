import { create } from "zustand";
import { createComicSlice, comicSliceType } from "./comicSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<comicSliceType>()(
  devtools((...a) => ({
    ...createComicSlice(...a),
  }))
);

// import { create } from "zustand";
// import { fetchMarvel } from "../services/MarvelService";
// import { MarvelType } from "../schemas/MarvelSchema";
// import { persist } from "zustand/middleware";

// type storeState = {
//   MarvelData: MarvelType;
//   loading: boolean;
//   offset: number;
//   character: string;
//   fecthData: (offset: number, character: string) => Promise<void>;
//   fecthPrev: (offset: number, character: string) => Promise<void>;
//   setCharacter: (character: string) => void;
// };

// const initial = {
//   count: 0,
//   limit: 10,
//   offset: 0,
//   results: [
//     {
//       id: 0,
//       title: "",
//       thumbnail: {
//         extension: "",
//         path: "",
//       },
//     },
//   ],
// };

// export const useStore = create<storeState>()(
//   persist(
//     (set) => ({
//       MarvelData: initial,
//       loading: false,
//       offset: 0,
//       character: "",
//       setCharacter: (character) => {
//         set(() => ({
//           character: character,
//           offset: 0,
//         }));
//       },
//       fecthData: async (offset, character) => {
//         set(() => ({
//           loading: true,
//         }));
//         const result = await fetchMarvel(offset + 20, character);
//         set(() => ({
//           MarvelData: result,
//           offset: result?.offset,
//           loading: false,
//           character: character,
//         }));
//       },
//       fecthPrev: async (offset, character) => {
//         if (offset > 0) {
//           set(() => ({
//             loading: true,
//           }));
//           const result = await fetchMarvel(offset - 20, character);
//           set(() => ({
//             MarvelData: result,
//             offset: result?.offset,
//             loading: false,
//             // character: character
//           }));
//         } else {
//           console.log("no hay paginas anteriores por ver");
//         }
//       },
//     }),
//     {
//       name: "marvel-data-storage",
//     }
//   )
// );
