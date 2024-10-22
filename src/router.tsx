import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import ComicsPage from "./routes/ComicsPage";
import IndexPage from "./routes/IndexPage";
import SearchCharacterPage from "./routes/SearchCharacterPage";
import CharacterPage from "./routes/CharacterPage";

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/characters" element={<SearchCharacterPage />}></Route>
          <Route path="/characters/:id" element={<CharacterPage />}></Route>
          <Route path="/comics" element={<ComicsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
