import { useEffect, useState, useRef } from "react";
import { useAppStore } from "../stores/useAppstore";
import CharacterCard from "../components/CharacterCard";

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

  return (
    <div className="">
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
          <h2 className="text-white p-1 text-center mx-auto border-b-4 border-slate-950 bg-slate-800">
            Mostrando resultados con {query}
          </h2>
        )}
        {charLoading ? (
          <>
            <h2 className="text-white text-center p-3 w-40 bg-slate-700 fixed bottom-0 ">
              Cargando...
            </h2>
            <h2 className="text-white p-2 text-center">Vacio</h2>
          </>
        ) : (
          <div className=" p-2 gap-2 flex justify-center flex-wrap ">
            {characters.results.map((character) => {
              return <CharacterCard key={character.id} character={character} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}
