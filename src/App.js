import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import { AnimeList } from "./AnimeList";
import AnimeDetail from "./pages/AnimeDetail";
import HomePage from "./pages/HomePage";
import Footer from "./component/Footer";
import CharDetail from "./pages/CharDetail";
import ScrollTo from "./component/ScrollTo";
import { CharList } from "./pages/CharList";

function App() {
  const [animeData, SetAnimeData] = useState();
  const [charData, SetCharData] = useState();
  const [animeTop, SetAnimeTop] = useState();
  const [charTop, SetCharTop] = useState();
  const [searchBox, setSearchBox] = useState("Oshi No Ko");
  const [searchBoxChar, setSearchBoxChar] = useState("Eren");
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [pagesTopAnim, setPagesTopAnim] = useState(1);
  const [pagesTopChar, setPagesTopChar] = useState(1);
  console.log(pages);
  const GetData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchBox}&page=${pages}&limit=20`
      );
      const resChar = await fetch(
        `https://api.jikan.moe/v4/characters?q=${searchBoxChar}&page=${pages}&limit=20`
      );
      const resTop = await fetch(
        `https://api.jikan.moe/v4/top/anime?page=${pagesTopAnim}&limit=20`
      );
      const resCharTop = await fetch(
        `https://api.jikan.moe/v4/top/characters?page=${pagesTopChar}&subtype=anime&limit=20`
      );
      const data = await res.json();
      const dataTop = await resTop.json();
      const dataCharTop = await resCharTop.json();
      const dataChar = await resChar.json();
      if (res) {
        SetAnimeData(data.data);
      }
      if (resChar) {
        SetCharData(dataChar.data);
      }
      if (resTop) {
        SetAnimeTop(dataTop.data);
      }
      if (resCharTop) {
        SetCharTop(dataCharTop.data);
        console.log(charTop);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const setHandleChange = (e) => {
    setSearchBox(e);
 
  };

  const setHandleChangeChar = (e) =>{
    setSearchBoxChar(e);
  }

  useEffect(() => {
    setIsLoading(true);
    const delayDebounceFn = setTimeout(() => {
      if (searchBox || searchBoxChar) {
        GetData();
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
    setIsLoading(false);
  }, [searchBox, pages, pagesTopAnim, pagesTopChar,searchBoxChar]);

  return (
    <div>
        <Router>
          <ScrollTo></ScrollTo>
          <Navbar onInputChange={setHandleChange} onInputChangeChar={setHandleChangeChar}></Navbar>
      <div className="container">
          <Routes>
            <Route path="/detail/anime/:malId" element={<AnimeDetail />} />
            <Route path="/detail/char/:malId" element={<CharDetail />} />
            <Route
              path="/list"
              element={
                <AnimeList
                  list={animeData}
                  isLoading={isLoading}
                  searchQuery={searchBox}
                  pages={setPages}
                />
              }
            />
            <Route
              path="/list/char"
              element={
                <CharList
                  list={charData}
                  isLoading={isLoading}
                  searchQuery={searchBoxChar}
                  pages={setPages}
                />
              }
            />
            <Route
              path="/home"
              element={
                <HomePage
                  animeData={animeTop}
                  pagesAnim={setPagesTopAnim}
                  pagesChar={setPagesTopChar}
                  pageChar={pagesTopChar}
                  mangaData={charTop}
                />
              }
            />
          </Routes>
      </div>
        </Router>
        <Footer></Footer>
    </div>
  );
}

export default App;
