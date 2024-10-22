export default function SearchCharacterPage() {
  return (
    <div className="">
      {/* <h2 className="p-3 text-white bg-slate-900 text-center text-xl uppercase border-b-2  border-red-700">
        Buscar personaje
      </h2> */}
      <section className="">
        <form
          action=""
          className=" p-3 flex justify-center border-b-2  border-red-700 bg-slate-900"
        >
          <input
            type="text"
            placeholder="Busca un personaje"
            className="p-3 text-xl w-full lg:w-1/3 bg-slate-800 "
          />
          {/* <button>buscar</button> */}
        </form>
        <h1 className="text-white w-full text-center p-2">No hay resultados</h1>

        <div className="p-20 flex-1 "></div>
      </section>
    </div>
  );
}
