import { useAppStore } from "../stores/useAppstore";

export default function PaginationButtons() {
  const { fecthData, fecthPrev, offset, characterComic } = useAppStore();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-slate-950 p-4 text-white text-center space-x-4 pb-10">
      <button
        className="bg-red-900 py-2 px-10 uppercase hover:bg-red-600"
        onClick={() => {
          fecthPrev(offset, characterComic);
          scrollToTop();
        }}
      >
        anterior
      </button>
      <button
        className="bg-red-900 py-2 px-10 uppercase hover:bg-red-600"
        onClick={() => {
          fecthData(offset, characterComic);
          scrollToTop();
        }}
      >
        siguiente
      </button>
    </div>
  );
}
