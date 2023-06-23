import "./AnimeDetail.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function AnimeDetail() {
  const [animeData, SetAnimeData] = useState();
  const { malId } = useParams();
  const GetData = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
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
          
          <div className="card-detail" >
            <section id="main"></section>
            <p class="info-title">{animeData.title}</p>
            <div class="d-flex descript">
              <div class="left">
                <img src={animeData.images.webp.large_image_url} />
              </div>
              <div class="right">
                <p>{animeData.synopsis}</p>
                <br />
              </div>
            </div>
            <div className="more-info">
              <pre>Title              : {animeData.title}</pre>
              <pre>Title Japanese     : {animeData.title_japanese}</pre>
              <pre>Genre              <ul>{animeData.genres.map((w)=>{return (<li key={w.mal_id}><pre>                 : {w.name}</pre></li>)})}</ul><hr></hr></pre>
              <pre>Duration           : {animeData.duration}</pre>
              <pre>Rank               : {animeData.rank}</pre>
              <pre>Score              : {animeData.score}</pre>
              <pre>Studio             : {animeData.studios.map((w)=>{return (<span key={w.mal_id}>{w.name}. </span> )})}</pre>
              <pre>Rating             : {animeData.rating}</pre>
            </div>  
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AnimeDetail;
