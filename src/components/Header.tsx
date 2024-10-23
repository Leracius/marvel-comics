import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();

  return (
    <>
      <header
        className={
          location.pathname === "/"
            ? "flex flex-col justify-center items-center pt-16 lg:pt-28 bg-slate-950"
            : " items-center flex p-2  bg-slate-900 "
        }
      >
        <img
          className={`transition-all ${
            location.pathname === "/" ? "h-32" : "h-14"
          }`}
          src="/Marvel-logo.png "
        />
        <h1
          className={
            location.pathname === "/"
              ? "p-4  text-white font-bold text-xl text-center uppercase w-full lg:w-1/2 lg:bg-slate-800 mt-10"
              : "p-4  text-white font-bold text-xl text-center uppercase "
          }
        >
          {location.pathname === "/"
            ? "Zustand store on Marvel API and zod schema validation, now with routing. Search thousand of comics and see the database of all characters"
            : "marvel database"}
        </h1>
      </header>

      {/* w-1/2 mx-auto */}
      <nav
        className={`bg-slate-700 text-white text-xl flex justify-center  sticky top-0 z-30  transition-all ${
          location.pathname === "/" && "w-full mx-auto lg:w-1/2 bg-slate-900"
        }`}
      >
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

      {location.pathname === "/" && (
        <h1 className="opacity-65 fixed bottom-0 w-full p-1  text-white font-sans text-sm uppercase text-center">
          Zustand store on Marvel API and zod schema validation - busca comics
          de tu personaje favorito
        </h1>
      )}
    </>
  );
}
