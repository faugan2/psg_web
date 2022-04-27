import "../../styles/sections/section1.scss";
import banner from "../img/banner.jpg";
const Section1 = () => {
    return (
        <div className="row">
            <div className="col-12 col-sm-6">
                <h1>
                    It’s Time to Pick and Play the Best Pick’em Sports Game!
                </h1>
                <p>
                    Get yourself immersed in Picking, Playing and Winning Prizes
                    all season long. ProSport.Guru is a 100% free and an
                    interactive&nbsp;<strong>Fantasy Sports &nbsp;Pick&rsquo; Em
                    Game</strong>.&nbsp;Don&rsquo;t miss out on creating your free
                    profile today.&nbsp;<strong>Pick, Play and Enjoy but without the
                    risk!</strong>
                </p>
                <p className="mt-4 mb-4">
                    Ready to play? It&rsquo;s Time to Get Pickin&rsquo;!
                </p>
                
                <hr />
                {/*<p className="mt-4" style={{display: "none" }}>
                    ProSport.Guru is a Free-to-play&nbsp;online prediction game.
                    Ramp up the rivalry to challenge your knowledge and witness
                    the most fun fantasy season ever!
                </p>
                <p className="my-4">Play for Free</p>*/}
                <div className="mt-2 bg-indianred py-2 px-2.5 rounded-md font-bold w-max cursor-pointer hover:text-black hover:bg-white transition">
                    <div>Let's Go</div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-banner">
                <a href="#nba-basketball-pools.html" className="banner">
                    <img className="imgBanner" src={banner} alt="pool host" />
                </a>
            </div>

            <div className="zone2 mt-8">
                <div className="text">
                    ProSport.Guru Pick’em is a Free-to-play{" "}
                    <strong>online prediction game</strong>. Ramp up the rivalry
                    to challenge your knowledge and witness the most fun fantasy
                    season ever!
                </div>
                <div style={{ display: "inline-block" }}>
                    <a
                        className="btn btn-light"
                        href="#pick5/index.html"
                        onclick="setCookie('suppressPick5Banner',1,30);"
                    >
                        Play For FREE
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section1;
