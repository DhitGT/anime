import "./AnimeDetail.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function CharDetail() {
  const [animeData, SetAnimeData] = useState();
  const { malId } = useParams();
  const GetData = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/characters/${malId}`);
      const data = await res.json();
      if (res) {
        SetAnimeData(data.data);
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (malId) {
        GetData();
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, []);
  console.log(animeData);
  return (
    <div>
      <div className="container">
        {animeData ? (
          <div className=" card-detail">
            <div className="">
              <p class="info-title">{animeData.name}</p>
              <p class="info-title">{animeData.name_kanji}</p>
            </div>
            <div class="d-flex descript">
              <div class="left">
                <img src={animeData.images.webp.image_url} />
                <p className="title-3">'{animeData.nicknames}'</p>
              </div>
              <div class="right">
                <p>{animeData.about}</p>
                <br />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CharDetail;
