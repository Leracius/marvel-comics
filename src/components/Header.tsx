import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className=" items-center flex p-2  border-b-4 border-slate-950 bg-slate-800 ">
        <img className="h-14 " src="/Marvel-logo.png" />
        <h1 className="p-4  text-white font-bold text-xl uppercase">
          MARVEL DATABASE
        </h1>
      </header>
      <nav className="bg-slate-700 text-white text-xl flex justify-center  border-b-4 border-slate-950">
        <NavLink className="hover:bg-red-800 py-2 w-32 text-center" to={"/"}>
          inicio
        </NavLink>
        <NavLink
          className="hover:bg-red-800 py-2 w-32 text-center"
          to={"/comics"}
        >
          comics
        </NavLink>
        <NavLink
          className="hover:bg-red-800 py-2 w-32 text-center"
          to={"/characters"}
        >
          personajes
        </NavLink>
      </nav>

      <h1 className="opacity-65 fixed bottom-0 w-full p-1  text-white font-sans text-sm uppercase text-center">
        Zustand store on Marvel API and zod schema validation - busca comics de
        tu personaje favorito
      </h1>
    </>
  );
}
