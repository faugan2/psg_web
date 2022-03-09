import "../styles/section1.scss";
import banner from "./img/banner.jpg";
const Section1=()=>{
    return(
        <div className="row" style={{alignItems:"center"}} >
        <div className="col-12 col-sm-6">
        <h1>THE ULTIMATE PICKEM’ SPORTS GAME</h1>
        <p className="callout">We celebrate the best in sports + e-sports</p>
        <p><a className="btn btn-xl btn-primary" href="#start_pool/index.html">Get Started</a></p>
        </div>
        <div className="col-12 col-sm-6 col-banner">
        <div></div>
    
        <a href="#nba-basketball-pools.html" className="banner">
        <img className="imgBanner" src={banner} alt="pool host" /> 
    
        </a>     
        </div>

        <div className="zone2">
        <div className="text">While sports picking is fun to play on your own, it’s even more exhilarating to compete against your friends or other sports fans</div>
        <div style={{display:"inline-block"}}><a className="btn btn-light" href="#pick5/index.html" onclick="setCookie('suppressPick5Banner',1,30);">Play FREE</a></div>
        </div>
    </div>
    )
}

export default Section1;