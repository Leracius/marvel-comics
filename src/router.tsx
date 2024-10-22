// import Hero from "./components/Hero";
// import MarvelComponent from "./components/MarvelComponent";
// import PaginationButtons from "./components/PaginationButtons";

// export default function App() {
//   return (
//     <>
//       <header className="p-5">header</header>
//       <Hero />
//       <div className="flex flex-col lg:flex-row">
//         <Character />
//         <MarvelComponent />
//       </div>
//       <PaginationButtons />
//     </>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import ComicsPage from "./Layout/comicsPage";
import IndexPage from "./Layout/indexPage";
import SearchCharacterPage from "./Layout/SearchCharacterPage";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/characters" element={<SearchCharacterPage />}></Route>
          <Route path="/comics" element={<ComicsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
