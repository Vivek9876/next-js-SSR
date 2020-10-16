import Head from "next/head";
import Footer from '../shared/Footer/footer';
import Search from './globalSearch';
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { concertData } from '../data/data';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>POST Up</title>
      </Head>
      <div className="col-md-12">
        <span className="d-inline-block" style={{ color: "white" }}><h2 className="heading">PostUp</h2></span>
        <div className="col-md-6 try d-inline-block">
        <Search suggestions={concertData} />
        </div>
        <div className="col-md-6 shows">
          <span className="a133_812">Shows</span>
          <span className="a133_813">Editorial</span>
          <div className="a133_835">
            <span className="">💖</span><span style={{ color: "white" }}> Saved</span>
          </div>
        </div>
      </div>
      
      <div id="main">{props.children}</div>
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        footer {
          padding: 5rem 1rem;
          text-align: center;
          font-size: 2rem;
        }
        .shows{
          display:block;
          left:60%;
          margin-top: -2%;
        }
        .try{
          display:block;
          left:7%;
          color:white;
        }
        .heading{
          left: 17%;
          position: relative;
        }
        footer img {
          display: inline-block;
          height: 1em;
          width: auto;
          padding: 0 0.4em;
        }

        nav {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #1c1c1c;
          font-size: 1rem;
          height: 3.5rem;
        }

        nav a {
          flex-grow: 1;
          color: #fff;
          text-decoration: none;
          text-align: center;
        }
        .a144_92 {
          width: 271px;
          height: 29px;
          background: url("../images/a144_92.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 8%;
          left: 0px;
          overflow: hidden;
        }

        .a133_811 {
          width: 15px;
          height: 21px;
          background: url("../images/a133_811.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 14px;
          left: 0px;
          transform: rotate(-45deg);
          overflow: hidden;
        }
        .a133_780 {
          width: 242px;
          color: rgba(255,255,255,1);
          position: absolute;
          top: 0px;
          left: 29px;
          font-family: Poppins;
          font-weight: Regular;
          font-size: 16px;
          opacity: 0.4000000059604645;
          text-align: left;
        }
        .a135_24 {
          width: 250px;
          height: 31px;
          background: url("../images/a135_24.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: -5%;
          right: -30%;
          overflow: hidden;
        }
        
        .a133_812 {
          width: 52px;
          color: rgba(241,87,58,1);
          position: relative;
          top: 0px;
          left: 0px;
          font-family: Poppins;
          font-weight: Regular;
          font-size: 16px;
          opacity: 1;
          text-align: right;
        } 

        .a133_813 {
          width: 64px;
          color: rgba(255,255,255,1);
          position: absolute;
          top: 0px;
          left: 82px;
          font-family: Poppins;
          font-weight: Regular;
          font-size: 16px;
          opacity: 1;
          text-align: right;
        }

        .a133_835 {
          width: 74px;
          height: 29px;
          background: url("../images/a133_835.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 0px;
          left: 176px;
          overflow: hidden;
        }
        .a133_814 {
          width: 50px;
          color: rgba(255,255,255,1);
          position: absolute;
          top: 0px;
          left: 25px;
          font-family: Poppins;
          font-weight: Regular;
          font-size: 16px;
          opacity: 1;
          text-align: right;
          padding-left:10px;
        }
        .MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth{
          display:d-inline-block:
        }
      `}</style>
      <style jsx global>{`
        body {
          background-color:#1c1c1c;
          margin: 0;
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          padding: 3.5rem 0 0;
          overflow-x:hidden;
        }
        .MuiPopover-paper.MuiPaper-elevation8 {
          // top: 37% !important;
          // max-width: 50% !important;
          left: 6% !important;
          position:relative;
      }
      .MuiPopover-paper{
        top:31% !important
      }
      .MuiPaper-rounded{
        max-width: 40% !important
      }
      .MuiFormControlLabel-root {
        width: 32%;
    }
    .MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot {
      color: white;
  }
    .MuiTypography-body1 {
      font-size: 0.8rem !important;
      line-height: 1 !important;
      margin-left: -8px !important;
  }
  .suggestion{
    display: block;
    width: 100%;
    min-height: 250px;
    max-height: 325px;
    margin-right: 0.5rem;
}
  .search-result-categories>li>a {
      color: #b6b6b6;
      font-weight: 400
  }
  
  .search-result-categories>li>a:hover {
      background-color: #ddd;
      color: #555
  }
  
  .search-result-categories>li>a>.glyphicon {
      margin-right: 5px
  }
  
  .search-result-categories>li>a>.badge {
      float: right
  }
  
  .search-results-count {
      margin-top: 10px
  }
  
  .search-result-item {
      padding: 20px;
      background-color: #fff;
      border-radius: 4px
  }
  
  .search-result-item:after,
  .search-result-item:before {
      content: " ";
      display: table
  }
  
  .search-result-item:after {
      clear: both
  }
  
  .search-result-item .image-link {
      display: block;
      overflow: hidden;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px
  }
  
  @media (min-width:768px) {
      .search-result-item .image-link {
          display: inline-block;
          margin: -20px 0 -20px -20px;
          float: left;
          width: 200px
      }
  }
  
  @media (max-width:767px) {
      .search-result-item .image-link {
          max-height: 200px
      }
  }
  
  .search-result-item .image {
      max-width: 100%
  }
  
  .search-result-item .info {
      margin-top: 2px;
      font-size: 12px;
      color: #999
  }
  
  .search-result-item .description {
      font-size: 13px
  }
  
  .search-result-item+.search-result-item {
      margin-top: 20px
  }
  
  @media (min-width:768px) {
      .search-result-item-body {
          margin-left: 200px
      }
  }
  
  .search-result-item-heading {
      font-weight: 400
  }
  
  .search-result-item-heading>a {
      color: #555
  }
  
  @media (min-width:768px) {
      .search-result-item-heading {
          margin: 0
      }
  }
  
      `}</style>
    </div>
  );
}
