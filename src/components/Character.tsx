import { characters } from "../data/characters";
import { useAppStore } from "../stores/useAppstore";

export default function Character() {
  const { fecthData, setCharacter } = useAppStore();

  const handleCharacter = (off: number, char: string) => {
    setCharacter(char);
    fecthData(off, char);
  };

  return (
    <div className="bg-slate-950  lg:border-r-4 border-slate-950">
      <h2 className="p-3 text-white lg:bg-slate-800 text-center text-xl uppercase border-b-4  border-slate-950">
        principales
      </h2>
      <div className="  flex justify-center pb-4 lg:py-0 ">
        <div className="flex gap-4 lg:gap-0 overflow-x-scroll md:overflow-hidden lg:flex-col">
          {characters.map((character) => {
            return (
              <button
                key={character.id}
                className=" hover:border-red-800"
                onClick={() => handleCharacter(0, character.id.toString())}
              >
                <div
                  className=" border-white p-24 bg-slate-400 bg-cover bg-center"
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
