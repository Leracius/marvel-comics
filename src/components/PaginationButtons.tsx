import { useStore } from "../store";

export default function PaginationButtons() {
  const { fecthData, fecthPrev, offset, character } = useStore();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-slate-900 p-4 text-white text-center space-x-4 border-t-2 border-red-700">
      <button
        className="bg-red-900 py-2 px-10 uppercase hover:bg-red-600"
        onClick={() => {
          fecthPrev(offset, character);
          scrollToTop();
        }}
      >
        anterior
      </button>
      <button
        className="bg-red-900 py-2 px-10 uppercase hover:bg-red-600"
        onClick={() => {
          fecthData(offset, character);
          scrollToTop();
        }}
      >
        siguiente
      </button>
    </div>
  );
}
