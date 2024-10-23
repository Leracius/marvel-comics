export default function IndexPage() {
  return (
    <div className="flex justify-center p-10">
      <div className="text-white w-[400px] p-4 space-y-2 bg-slate-950">
        <h1 className=" text-center font-mono color text-purple-500">
          code by Axel 🧑‍💻
        </h1>
        <h1 className="text-white text-center font-mono color">
          visit my github:{" "}
          <a
            className="text-blue-400 hover:text-blue-600"
            href="https://github.com/Leracius"
          >
            link github
          </a>
        </h1>
        <h1 className="text-white text-center font-mono color">
          Marvel API:{" "}
          <a
            className="text-green-600 hover:text-green-300"
            href="https://developer.marvel.com/docs"
          >
            marvel developer portal
          </a>
        </h1>
      </div>
    </div>
  );
}
