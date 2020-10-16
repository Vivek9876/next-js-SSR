import React from "react";
import Layout from "../../components/Layout";
import listStyles from "../../styles/list";
import { useRouter } from 'next/router';
import { concertData, similarData } from '../../data/data';

const Movie = () => {
  const router = useRouter()
  const movie = concertData.find((item) => item._id == router.query.id);
  return (
    <Layout>
      <div className="movie">
        {movie &&
          <div className="row">
            
              <div className="col-sm-3 col-md-6">
                    {/* <img
                    className="poster"
                    src={imageUrlFor(movie.poster)
                      .ignoreImageParams()
                      .width(500)}
                    alt={`Movie poster for ${movie.title}`}
                  /> */}
​
                  <img src={movie.imageUrl} className="detail_image"/> 
                  <br></br>
                  <br></br>
                  <div className="detail_1">R+B, Synth indie, Indie /alt</div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="detail_2">SET reminders</div><br></br>
                  <div className="detail_3"><u>Google  Calendar </u>&nbsp;&nbsp;&nbsp;&nbsp;<u>iCal </u>&nbsp;&nbsp;&nbsp;&nbsp;<u>Outlook</u></div><br></br><br></br>
                  <div className="detail_2">Share this</div>
              </div>
              
              
              <div className="col-sm-9 col-md-6" >
              
                  <div className="detail_name">{movie.name}</div>
                  
                  <div className="detail_city">{movie.city},{movie.state}</div>
                  <br></br>
                  <div className="detail_time">{movie.time}</div>
                  <br></br>
                  <div className="detail_price">{movie.price} </div>
                  <hr className="new4"></hr>
                  <button type="button" className="button">TICKETS</button>
                  <br></br>
                  <br></br>
                  <div className="detail_description">{movie.description}</div>
                  
                  <br></br>
                  <br></br><br></br>
                  <div className="detail_present">Presented By {movie.presentBy}</div>
                  
              </div>
            
          </div>
        
        }
        <br></br>
        <br></br>
        <hr className="new4"></hr>
        <br></br>
          <div className="similar">SIMILAR SHOWS</div>
          <div>
          <div className="movies">
            <div className="list">
              {similarData.map(movie => (
                <div key={movie._id} className="movie_padding">
                  {/* <Link href="/movie/[id]" as={`/movie/${movie._id}`}> */}
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
                      <img src={movie.imageUrl}/>
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
                  {/* </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      .col-sm-3.col-md-6{
        border-right: 0.3rem solid white;
      }
      .detail_image{
        width: 80%;
        height: 80%;
        margin-left:7%;
      }
      .row{
        margin-top: 7%;
        padding: 0 1rem;
      }
      .detail_time{
        color: rgba(255,255,255,1);
        font-family: Poppins;
        font-size: 18px;
        opacity: 1;
        text-align: left;
      }
      .detail_name{
        color:white;
        font-family: Druk Cond;
        font-size: 73px;
        opacity: 1;
        text-align: left;
      }
      .detail_city{
        color: rgba(241,87,58,1);
        position: relative;
        font-family: Poppins;
        font-size: 15px;
        opacity: 1;
        text-align: left;
        
      }
      .detail_price{
        color: rgba(255,255,255,1);
        position: relative;
        font-family: IBM Plex Mono;
        font-size: 35px;
        opacity: 1;
        text-align: left;
      }
      .button{
        background-color:#F1573A;
        border: none;
        color: white;
        padding: 15px 32px !important;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px !important;
        cursor: pointer !important;
      }
      .detail_description{
        color: rgba(255,255,255,1);
        font-family: Poppins;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .detail_1{
        color: rgba(241,87,58,1);
        position: absolute;
        left: 9%;
        font-family: IBM Plex Mono;
        font-size: 13px;
        opacity: 1;
        text-align: left;
      }
      .detail_2{
        color: rgba(255,255,255,1);
        position: absolute;
        font-family: IBM Plex Mono;
        font-size: 15px;
        opacity: 1;
        left: 9%;
        text-align: left;
      }
      .detail_3{
        color: rgba(241,87,58,1);
        position: absolute;
        left: 9%;
        font-family: IBM Plex Mono;
        font-size: 15px;
        opacity: 1;
        text-align: left;
      }
      .detail_present{
        color: white;
        position: absolute;
        font-family: IBM Plex Mono;
        font-size: 15px;
        opacity: 1;
        text-align: left;
      }
      
        hr.new4 {
          border: 1px solid white;
          margin-left: 5%;
          margin-right: 5%;
        }
        .similar{
          color: rgba(255,255,255,1);
          position: absolute;
          left: 8%;
          font-family: Druk Cond;
          font-size: 37px;
          opacity: 1;
          text-align: left;
        }
        .content {
          display: flex;
          flex-direction: column-reverse;
          max-width: 80rem;
          margin: 1rem auto;
          padding: 0 1rem;
        }

        .overview {
          color:white;
          font-family: Poppins;
          font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 182.
        }

        .sidebar {
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
          flex-grow: 1;
        }

        .main-content {
          flex-grow: 3;
        }

        .movie > h2 {
          margin: 2rem 0 0 0;
          padding: 0 0.5rem;
          border-bottom: 1px solid #ccc;
        }

        .poster {
          display: block;
          width: 100%;
        }

        .cast-list img {
          width: 2rem;
          height: auto;
          margin: 0.5rem;
          object-fit: cover;
          display: block;
        }

        .header {
          background-size: cover;
          padding-top: 10rem;
        }

        .header h1 {
          font-size: 10vw;
          line-height: 1em;
          margin: 1rem 0 0 0;
          padding: 0;
        }

        .header > img {
          width: 100%;
          display: block;
        }

        .header .header-content {
          color: #fff;
          text-align: center;
          padding-top: 5em;
          padding-bottom: 2em;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.9) 90%
          );
        }

        .cast-list {
          margin: 0;
          padding: 0;
          line-height: 2em;
          margin-bottom: 2rem;
        }

        .cast-list-item {
          display: block;
          margin: 0;
          padding: 0;
        }

        .cast-list-link {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid #ccc;
          align-items: center;
          display: flex;
        }

        .overview :global(figure) {
          margin: 0;
          padding: 0;
        }

        .overview :global(img) {
          display: block;
          max-width: 100%;
          box-sizing: border-box;
        }

        @media screen and (max-width: 499px) {
          .cast-character-name::before {
            content: " as ";
          }
        }

        @media screen and (min-width: 500px) {
          .content {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: 2fr 5fr;
            padding: 1rem;
          }

          .overview :global(p) {
            margin-top: 0;
          }

          .cast-list img {
            margin: 0;
            margin-right: 0.5em;
          }

          .cast-list {
            display: grid;
            line-height: 1em;
            grid-gap: 2rem;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .cast-list-link {
            border: none;
            align-items: flex-start;
          }

          .cast-person-name {
            display: block;
            font-size: 1.2em;
            font-weight: 500;
            line-height: 1.2em;
          }

          .cast-list-link span {
            display: block;
          }
        }

        .overview :global(figure) {
          margin: 0;
          padding: 0;
        }

        .overview :global(img) {
          display: block;
          max-width: 100%;
          box-sizing: border-box;
        }

        @media screen and (max-width: 499px) {
          .cast-character-name::before {
            content: " as ";
          }
        }

        @media screen and (min-width: 500px) {
          .content {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: 2fr 5fr;
            padding: 1rem;
          }

          .overview :global(p) {
            margin-top: 0;
          }

          .cast-list img {
            margin: 0;
            margin-right: 0.5em;
          }

          .cast-list {
            display: grid;
            line-height: 1em;
            grid-gap: 2rem;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .cast-list-link {
            border: none;
            align-items: flex-start;
          }

          .cast-person-name {
            display: block;
            font-size: 1.2em;
            font-weight: 500;
            line-height: 1.2em;
          }

          .cast-list-link span {
            display: block;
          }
        }
      `}</style>
      <style jsx>{listStyles}</style>
    </Layout>
  );
};

export default Movie;
