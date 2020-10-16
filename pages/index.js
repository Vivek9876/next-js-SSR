import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import listStyles from "../styles/list";
import Filters from "../shared/filter/filter";
import { concertData } from "../data/data";
//  code for main page
const Detail = ({ movies }) => {
  return (
    <Layout>
      <div>
        <Filters />
      </div>
      <div className="details">
        <div className="list">
          {concertData.map(movie => (
            <div key={movie._id} className="movie_padding">
              <Link href="/details/[id]" as={`/details/${movie._id}`}>
                <a>
                 
                  <img src={movie.imageUrl} />
                  <div style={{ paddingTop: "0.2em", color: "rgba(255,255,255,1)" }} >
                  <div className="detail_name"> {movie.name}</div>
                      <div className="detail_date">  {movie.date}</div>
                      <div className="address">  {movie.city},{movie.state}</div>
                      <div className="detail_type"> {movie.type}</div>
                  </div>

                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .details {
          padding: 1rem;
          margin-top:-3%;
        }
        .details-list__directed-by {
          display: block;
          font-size: 1rem;
        }
        .detail_name {
          margin-bottom: 3%;
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 138.2%;
          color: #FFFFFF;
         }
         .detail_date {
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
         .detail_type {
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

export default Detail;
