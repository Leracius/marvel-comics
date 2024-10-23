import { useEffect } from "react";
import { useAppStore } from "../stores/useAppstore";
import Card from "./Card";
import ComicSkeleton from "./ComicSkeleton";

export default function MarvelComponent() {
  const MarvelData = useAppStore((state) => state.MarvelData);
  const fecthData = useAppStore((state) => state.fecthData);
  const character = useAppStore((state) => state.characterComic);
  const offset = useAppStore((state) => state.offset);
  const loading = useAppStore((state) => state.loading);
  const fecthPrev = useAppStore((state) => state.fecthPrev);

  useEffect(() => {
    fecthData(offset, "1009610");
  }, []);

  useEffect(() => {
    console.log(MarvelData);
  }, [MarvelData]);

  return (
    <main className=" bg-slate-950 w-full">
      <div className="text-md lg:text-xl uppercase  flex justify-center lg:justify-start border-b-8 border-slate-950">
        <h1 className="py-3 flex-1 lg:flex-0  text-center px-10 text-white bg-slate-800  ">
          {offset ? `Pagina  ${offset / 20}` : ""}
        </h1>
        <button
          className="py-3 px-10 text-white bg-slate-900  hover:bg-red-700"
          onClick={() => fecthPrev(offset, character)}
        >
          anterior
        </button>
        <button
          className="py-3 px-10 text-white bg-slate-900  hover:bg-red-700"
          onClick={() => fecthData(offset, character)}
        >
          siguiente
        </button>
      </div>

      <div className="bg-slate-950 flex gap-2 py-8 lg: flex-wrap justify-center">
        {!loading ? (
          MarvelData.results.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
              />
            );
          })
        ) : (
          <ComicSkeleton />
        )}
      </div>
    </main>
  );
}
