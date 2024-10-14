export default function Hero() {
  return (
    <>
      <header className=" bg-cover bg-center items-center flex justify-center p-2 bg-slate-950">
        <img className="h-14" src="/Marvel-logo.png" />
        <h1 className="p-4 flex-1 text-white font-bold text-xl uppercase">
          Zustand store on Marvel API and zod schema validation
        </h1>
      </header>
      <h1 className="p-1 bg-red-700 text-white font-sans text-sm uppercase">
        busca comics de tu personaje favorito
      </h1>
    </>
  );
}
