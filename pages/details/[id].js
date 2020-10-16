import React from "react";
import Layout from "../../components/Layout";
import listStyles from "../../styles/list";
import { useRouter } from 'next/router';
import { concertData, similarData } from '../../data/data';

const Detail = () => {
  const router = useRouter()
  const details = concertData.find((item) => item._id == router.query.id);
  return (
    <Layout>
      <div className="details_person">
        {details &&
          <div className="row">
            
              <div className="col-sm-3 col-md-6">

                  <img src={details.imageUrl} className="detail_image"/> 
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
              
                  <div className="detail_name">{details.name}</div>
                  
                  <div className="detail_city">{details.city},{details.state}</div>
                  <br></br>
                  <div className="detail_time">{details.time}</div>
                  <br></br>
                  <div className="detail_price">{details.price} </div>
                  <hr className="new4"></hr>
                  <button type="button" className="button">TICKETS</button>
                  <br></br>
                  <br></br>
                  <div className="detail_description">{details.description}</div>
                  
                  <br></br>
                  <br></br><br></br>
                  <div className="detail_present">Presented By {details.presentBy}</div>
                  
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
              {similarData.map(details => (
                <div key={details._id} className="movie_padding">
                    <a>
                      <img src={details.imageUrl}/>
                      <div style={{ paddingTop: "0.2em", color: "rgba(255,255,255,1)" }} >
                        {details.name}
                        {details.date}
                        {details.city}
                        {details.state}
                        {details.type}
                      </div>
                    </a>
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
        .details_person > h2 {
          margin: 2rem 0 0 0;
          padding: 0 0.5rem;
          border-bottom: 1px solid #ccc;
        }
      `}</style>
      <style jsx>{listStyles}</style>
    </Layout>
  );
};

export default Detail;
