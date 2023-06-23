import { useNavigate } from "react-router-dom";
import NextPage from "../component/NextPage";

function HomePage({ animeData, pagesChar, pageChar, pagesAnim, mangaData }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="title-1">
        <h1>BEST ANIME</h1>
        <p>TOP RANK</p>
      </div>
      {animeData ? (
        <div className="card-wrapper ">
          {animeData.map((anime, index) => {
            return (
              <div className="card text-center">
                <div className="thumbnail">
                  <button
                    onClick={() => {
                      navigate(`/detail/anime/${anime.mal_id}`);
                    }}
                  >
                    <img
                      loading="lazy"
                      src={anime.images.webp.large_image_url}
                    />
                  </button>
                  <p className="title title-2">
                    Rank : {anime.rank}
                    <br></br>
                    <p>Score : {anime.score}</p>
                  </p>
                  <p className="title">{anime.title}</p>
                </div>
              </div>
            );
          })}
          <NextPage page={pagesAnim}></NextPage>
        </div>
      ) : (
        <div className="card-wrapper">
          <h1 style={{ color: "white", textAlign: "center" }}>Loading...</h1>
        </div>
      )}
      <div className="title-1">
        <h1>BEST CHARACTERS</h1>
        <p>TOP RANK</p>
        
      </div>
      {mangaData ? (
        <div className="card-wrapper ">
          {mangaData.map((anime, index) => {
            return (
              <div className="card text-center">
                <div className="thumbnail">
                  <button
                    onClick={() => {
                      navigate(`/detail/char/${anime.mal_id}`);
                    }}
                  >
                    <img loading="lazy" src={anime.images.webp.image_url} />
                  </button>
                  <p className="title title-2">
                    <br></br>
                    <p>Favorite : {anime.favorites}</p>
                  </p>
                  <p className="title">{anime.name}</p>
                </div>
              </div>
            );
          })}
          <NextPage page={pagesChar}></NextPage>
        </div>
      ) : (
        <div className="card-wrapper">
          <h1 style={{ color: "white", textAlign: "center" }}>Loading...</h1>
        </div>
      )}
    </>
  );
}

export default HomePage;
