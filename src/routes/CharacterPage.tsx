import { useAppStore } from "../stores/useAppstore";

export default function CharacterPage() {
  const character = useAppStore((state) => state.character);

  return (
    <main className="bg-slate-900">
      <div className="flex flex-col lg:justify-center lg:flex-row lg:p-10 lg:gap-10">
        <img
          className="lg:h-[400px] lg:w-[400px] w-full lg:rounded-full lg:sticky lg:top-20"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        ></img>
        <div className=" bg-slate-800 pb-20 lg:pb-4">
          <p className="text-white text-center font-thin text-3xl bg-slate-700 p-4">
            {character.name}
          </p>
          {character.description && (
            <>
              {" "}
              <p className="text-white text-center text-2xl pt-4 p-4 uppercase bg-slate-900">
                description:
              </p>
              <p className="text-white font-thin p-4">
                {character.description}
              </p>
            </>
          )}
          {character.comics && (
            <p className="text-white text-center text-2xl pt-4 p-4 uppercase bg-slate-900">
              comics:
            </p>
          )}
          {character.comics.items.map((item) => {
            return (
              <p
                key={item.name}
                className="text-white text-center font-thin py-1 px-4"
              >
                ✅ {item.name}{" "}
                <a className="text-indigo-400  ml-3" href={item.resourceURI}>
                  link
                </a>
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
}
