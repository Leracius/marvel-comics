import { useAppStore } from "../stores/useAppstore";

export default function CharacterPage() {
  const character = useAppStore((state) => state.character);

  return (
    <main>
      <div>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        ></img>
        <p className="text-white font-thin text-xl bg-black p-2">
          {character.name}
        </p>
        <p className="text-white font-thin pt-4 p-2 uppercase">description:</p>
        <p className="text-white font-thin p-2">{character.description}</p>
        <p className="text-white font-thin pt-4 p-2 uppercase">comics:</p>
        {character.comics.items.map((item) => {
          return (
            <p key={item.name} className="text-white font-thin py-1 px-4">
              ✅ {item.name}{" "}
              <a className="text-indigo-400  ml-3" href={item.resourceURI}>
                link
              </a>
            </p>
          );
        })}
      </div>
    </main>
  );
}
