import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import listStyles from "../styles/list";
import Filters from "../shared/filter/filter";
import { concertData } from "../data/data";

const Movies = ({ movies }) => {
  return (
    <Layout>
      <div>
        <Filters />
      </div>
      <div className="movies">
        <div className="list">
          {concertData.map(movie => (
            <div key={movie._id} className="movie_padding">
              <Link href="/movie/[id]" as={`/movie/${movie._id}`}>
                <a>
                  {/* {movie.poster && (
                    <img
                      src={imageUrlFor(movie.poster)
                        .ignoreImageParams()
                        .width(300)}
                      width="100"
                      height={100 / movie.posterAspect}
                    />
                  )} */}
                  <img src={movie.imageUrl} />
                  <div style={{ paddingTop: "0.2em", color: "rgba(255,255,255,1)" }} >
                  <div className="movie_name"> {movie.name}</div>
                      <div className="movie_date">  {movie.date}</div>
                      <div className="address">  {movie.city},{movie.state}</div>
                      <div className="movie_type"> {movie.type}</div>
                  </div>
                  {/* <h3 style={{ color: "rgba(255,255,255,1)" }}>{movie.title}</h3>
                  {movie.director && (
                    <span style={{ color: "rgba(255,255,255,1)" }} className="movies-list__directed-by">
                      Directed by {movie.director}
                    </span>
                  )} */}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .movies {
          padding: 1rem;
          margin-top:-3%;
        }
        .movies-list__directed-by {
          display: block;
          font-size: 1rem;
        }
        .movie_name {
          margin-bottom: 3%;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 138.2%;
          color: #FFFFFF;
         }
         .movie_date {
          font-family: IBM Plex Mono;
          font-style: normal;
          font-weight: normal;
          font-size: 11px;
          line-height: 13px;
          text-transform: uppercase;
          color: #FFFFFF;
         }
         .address {
          font-family: IBM Plex Mono;
          font-style: normal;
          font-weight: normal;
          font-size: 11px;
          line-height: 13px;
          text-transform: uppercase;
          color: #FFFFFF;
         }
         .movie_type {
          font-family: IBM Plex Mono;
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 15px;
          color: #F1573A;
          margin-top: 5%;
         }
      `}</style>
      <style jsx>{listStyles}</style>
    </Layout>
  );
};

export default Movies;
