import "../styles/section3.scss";
const Section3=()=>{
    return(
        <div className="sportBar row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-8 ">
        <div className="col"><a href="#nfl-football-pools.html" className="sport"><i className="fal fa-football-helmet"></i><div>NFL Football</div></a></div>
        <div className="col"><a href="#march-madness-pools.html" className="sport"><i className="fal fa-basketball-ball"></i><div>NCAA Basketball</div></a></div>
        <div className="col"><a href="#Golf/index.html" className="sport"><i className="fal fa-golf-ball"></i><div>Golf</div></a></div>
        <div className="col"><a href="#baseball-pools.html" className="sport"><i className="fal fa-baseball-ball"></i><div>Baseball</div></a></div>
        <div className="col"><a href="#College-Football-Pools.html" className="sport"><i className="fal fa-football-ball"></i><div>College Football</div></a></div>
        <div className="col"><a href="#nba-basketball-pools.html" className="sport"><i className="fal fa-basketball-hoop"></i><div>NBA Basketball</div></a></div>
        <div className="col"><a href="#nhl/index-2.html" className="sport"><i className="fal fa-hockey-puck"></i><div>NHL Hockey</div></a></div>
        <div className="col"><a href="#start_pool/index.html" className="sport"><i className="far fa-ellipsis-h fa-3x"></i><div>More</div></a></div>
      </div>
    );
}

export default Section3;