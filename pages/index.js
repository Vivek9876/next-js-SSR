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
                    {movie.name}
                    {movie.date}
                    {movie.city}
                    {movie.state}
                    {movie.type}
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
      `}</style>
      <style jsx>{listStyles}</style>
    </Layout>
  );
};

export default Movies;
