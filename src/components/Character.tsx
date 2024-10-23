import { characters } from "../data/characters";
import { useAppStore } from "../stores/useAppstore";

export default function Character() {
  const { fecthData, setCharacter } = useAppStore();

  const handleCharacter = (off: number, char: string) => {
    setCharacter(char);
    fecthData(off, char);
  };

  return (
    <div className="bg-slate-950">
      <h2 className="p-3 text-white my-4 lg:my-0 bg-slate-800 text-center text-xl uppercase ">
        principales
      </h2>
      <div className="  flex justify-center gap-2 lg:py-0 ">
        <div className="flex gap-4  overflow-x-scroll md:overflow-hidden lg:flex-col">
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
                <h1 className="text-white p-2 bg-slate-800">
                  {character.name}
                </h1>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
