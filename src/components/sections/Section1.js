import "../../styles/sections/section1.scss";
import banner from "../img/banner.jpg";
const Section1 = () => {
    return (
        <div className="row section1" style={{}}>
            <div className="col-12 col-sm-6">
                <h1>
                    It’s Time to Pick and Play the Best Pick’em Sports Game!
                </h1>
                <p>
                    Get yourself immersed in Picking, Playing and Winning Prizes
                    all season long. ProSport.Guru is a 100% free and an
                    interactive&nbsp;Fantasy Sports &nbsp;Pick&rsquo; Em
                    Game.&nbsp;Don&rsquo;t miss out on creating your free
                    profile today.&nbsp;Pick, Play and Enjoy but without the
                    risk!
                </p>
                <p>Ready to play? It&rsquo;s Time to Get Pickin&rsquo;!</p>
                <p>Let&rsquo;s Go</p>
                <hr />
                <p>
                    ProSport.Guru is a Free-to-play&nbsp;online prediction game.
                    Ramp up the rivalry to challenge your knowledge and witness
                    the most fun fantasy season ever!
                </p>
                <p>Play for Free</p>

                <p>
                    <a
                        className="btn btn-sm btn-primary"
                        href="#start_pool/index.html"
                    >
                        Let's Go
                    </a>
                </p>
            </div>
            <div className="col-12 col-sm-6 col-banner">
                <a href="#nba-basketball-pools.html" className="banner">
                    <img className="imgBanner" src={banner} alt="pool host" />
                </a>
            </div>

            <div className="zone2">
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
