import { useEffect, useState, useRef } from "react";
import { useAppStore } from "../stores/useAppstore";
import CharacterCard from "../components/CharacterCard";
import CharactersSkeleton from "../components/CharactersSkeleton";

export default function SearchCharacterPage() {
  const fetchCharacter = useAppStore((state) => state.fetchCarater);
  const characters = useAppStore((state) => state.characterData);
  const charLoading = useAppStore((state) => state.charLoading);
  const fetchbyName = useAppStore((state) => state.fetchByNameCharacter);
  const [query, setQuery] = useState("");
  const debounceTimeout = useRef<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = window.setTimeout(() => {
      if (value) {
        fetchbyName(value);
      } else {
        fetchCharacter();
      }
    }, 2000);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  console.log(charLoading);

  return (
    <div className="bg-slate-950">
      <section className="">
        <div className=" p-5 flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Busca un personaje"
            className="p-3 text-xl w-full lg:w-1/3 bg-slate-800 text-white"
            value={query}
            onChange={handleInputChange}
          />
        </div>
        {query && (
          <h2 className="text-white text-xl p-1 text-center mx-auto  mb-4 bg-slate-800">
            {!charLoading
              ? "Mostrando resultados con: "
              : "Buscando personajes con: "}

            <span className="font-mono uppercase bg-red-500 text-white">
              {query}
            </span>
          </h2>
        )}
        {charLoading ? (
          <>
            <h2 className="text-white text-center p-3 w-40 bg-slate-700 fixed z-40 bottom-0 ">
              Cargando...
            </h2>
            <CharactersSkeleton />
          </>
        ) : (
          <div className=" p-2 gap-4 flex justify-center flex-wrap ">
            {characters.results.map((character) => {
              return <CharacterCard key={character.id} character={character} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}
