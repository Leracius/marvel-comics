import Character from "./components/Character";
import Hero from "./components/Hero";
import MarvelComponent from "./components/MarvelComponent";
import PaginationButtons from "./components/PaginationButtons";

export default function App() {
  return (
    <>
      <Hero />
      <div className="flex flex-col lg:flex-row">
        <Character />
        <MarvelComponent />
      </div>
      <PaginationButtons />
    </>
  );
}
