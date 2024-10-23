import { NavLink } from "react-router-dom";
import { character } from "../types/MarvelSchema";
import { useAppStore } from "../stores/useAppstore";

type CharacterCardProps = {
  character: character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const setCharacter = useAppStore((state) => state.setUniqueCharacter);

  return (
    <NavLink
      onClick={() => setCharacter(character)}
      to={`/characters/${character.id}`}
      className="hover:scale-110 transition-all"
    >
      <div key={character.id} className="text-white  ">
        <img
          className="w-48 h-48 rounded-full filter grayscale hover:grayscale-0 transition duration-300"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        ></img>
        <h1 className="p-2 w-48 text-center ">{character.name}</h1>
      </div>
    </NavLink>
  );
}
