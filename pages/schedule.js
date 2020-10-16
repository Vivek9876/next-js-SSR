import React from "react";
import Layout from "../components/Layout";
import listStyles from "../styles/list";
import Filters from "../shared/filter/filter";
import { eventTime, concertData } from "../data/data";
import Link from "next/link";
import { useRouter } from 'next/router'

const Schedule = () => {
    const router = useRouter()

    const onClickConcert = (id) => {
        router.push({ href: "/movie/[id]", as: `/movie/${id}` })
    }

    return (
        <Layout>
            <div>
                <Filters />
            </div>
            <div className="">
            <table className="table table-dark">
             <tbody>
                {eventTime.map((item, index) => {
                    return (
                   
                        
                        <tr scope="row">
                            <td className="concert_date">
                            {index + 1}
                            {"    "}
                            {item.date}
                            </td>
                           
                                {item.concert.map((concert) => {
                                    return (
                                       
                                        <Link  href="/movie/[id]" as={`/movie/${concert._id}`}>
                                            <tr scope="row" className="">
                                                 <td className="concert_name">{concert.name}</td> 
                                                   <td className="concert_city"> {concert.city},{concert.state}</td> 
                                                   <td className="concert_price">{concert.price}</td> 
                                                  <td className="concert_type">{concert.type}</td> 
                                             </tr>
                                       </Link>
                                                
                                           
                                           
                                            
                                       
                                    )
                                })}
                            </tr>

                        
                    
                    )
                })}
                </tbody>
            </table>
        </div>
            <style jsx>{`
        .people {
          padding: 1rem;
        }

        .people .list h3 {
          line-height: 1em;
          padding: 0.5em 0;
        }
        .table-dark{
            background-color:#1c1c1c;
            margin-left:6%;
        }
        .concert_name{
            width:16%;
            font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 138.2%;
color: #FFFFFF;
        }
        .concert_city{
            width:20%;  
            font-family: IBM Plex Mono;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 19px;
text-transform: uppercase;
        }
        .concert_date{
            font-family: IBM Plex Mono;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 19px;
text-transform: uppercase;

        }
        .concert_price{
            width:7%;
            font-family: IBM Plex Mono;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 19px;
            text-transform: uppercase;
        }
        .concert_type{
            width:13%;
            font-family: IBM Plex Mono;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 17px;
color: #F1573A;
        }
      `}</style>
            <style jsx>{listStyles}</style>
        </Layout >
    );
};

export default Schedule;
