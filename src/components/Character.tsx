import { characters } from "../data/characters";
import { useStore } from "../store";
import { useEffect } from "react";

export default function Character() {
  const { fecthData, offset, setCharacter, character } = useStore();

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  useEffect(() => {
    console.log(character);
  }, [character]);

  const handleCharacter = (off: number, char: string) => {
    setCharacter(char);
    fecthData(off, char);
  };

  return (
    <div className="bg-slate-800  lg:border-r-2 border-red-700">
      <div className="py-4 px-1 flex justify-center lg:w-[180px]  lg:py-6">
        <div className="flex gap-4 overflow-x-scroll md:overflow-hidden lg:flex-col">
          {characters.map((character) => {
            return (
              <button
                key={character.id}
                className=" border-2 hover:border-red-800"
                onClick={() => handleCharacter(0, character.id.toString())}
              >
                <div
                  className=" border-white p-16 bg-slate-400 bg-cover bg-center"
                  style={{ backgroundImage: `url(${character.img})` }}
                ></div>
                <h1 className="text-white p-1 bg-black">{character.name}</h1>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
