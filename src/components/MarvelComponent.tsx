import { useEffect } from "react";
import { useStore } from "../store";
import Card from "./Card";

export default function MarvelComponent() {
  const { fecthData, MarvelData, offset, loading } = useStore();

  useEffect(() => {
    fecthData(offset, "1009610");
  }, []);

  return (
    <main className=" bg-slate-950 w-full">
      <h1 className="p-3 text-white bg-slate-900 text-center text-xl uppercase border-b-2  border-red-700">
        {offset ? `Pagina  ${offset / 20}` : ""}
      </h1>
      <div className="bg-slate-950 p-4 flex gap-8 lg: flex-wrap justify-center">
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
          <div className="min-h-[600px] lg:min-h-screen">
            <h1 className="text-white text-3xl uppercase">cargando...</h1>
          </div>
        )}
      </div>
    </main>
  );
}
