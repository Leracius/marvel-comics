import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className=" items-center flex justify-center p-2 bg-slate-950">
        <img className="h-14" src="/Marvel-logo.png" />
        <h1 className="p-4  text-white font-bold text-xl uppercase">
          Zustand store on Marvel API and zod schema validation
        </h1>
      </header>
      <nav className="bg-red-800 text-white flex justify-center  border-b-2 border-white">
        <NavLink className="hover:bg-slate-900 py-2 px-10" to={"/"}>
          inicio
        </NavLink>
        <NavLink className="hover:bg-slate-900 py-2 px-10" to={"/comics"}>
          comics
        </NavLink>
        <NavLink className="hover:bg-slate-900 py-2 px-10" to={"/characters"}>
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
