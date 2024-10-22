import MarvelComponent from "../components/MarvelComponent";
import PaginationButtons from "../components/PaginationButtons";
import Character from "../components/Character";

export default function ComicsPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <Character />
        <MarvelComponent />
      </div>
      <PaginationButtons />
    </>
  );
}
