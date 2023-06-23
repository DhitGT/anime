import React from "react";
import { useNavigate } from "react-router-dom";
import "../AnimeList.css";
import NextPage from "../component/NextPage";

export const CharList = ({ list, isLoading, searchQuery, pages }) => {
  const navigate = useNavigate();
  return (
    <>
      {list ? (
        <>
          <div className="title-1">
            <p>result for : </p>
            <h1>{searchQuery.toUpperCase()}</h1>
          </div>
          <div className="card-wrapper ">
            {list.map((anime, index) => {
              return (
                <div className="card text-center">
                  {!isLoading ? (
                    <div className="thumbnail">
                      <button
                        onClick={() => {
                          navigate(`/detail/char/${anime.mal_id}`);
                        }}
                      >
                        <img
                          loading="lazy"
                          src={anime.images.webp.image_url}
                        />
                      </button>

                      <p className="title">{anime.name}</p>
                    </div>
                  ) : (
                    <p className="loading-p">Loading..</p>
                  )}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h1 style={{ color: "white", textAlign: "center" }}>Loading...</h1>
      )}
      <NextPage page={pages}></NextPage>
    </>
  );
};
