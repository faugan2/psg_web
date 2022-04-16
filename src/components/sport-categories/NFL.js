import LeagueOptions from "../LeagueOptions";
import "../../styles/sport_category.scss";
const NFL = () => {
    return (
        <div role="tabpanel" className="tab-pane active" id="NFL">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3>NFL Football - Fan’s Favorite Since Years!</h3>
                    <h4>
                        PLAY NFL FOOTBALL EXACTLY HOW YOU IMAGINED. IT CAN NEVER
                        BE THIS EASIER!
                    </h4>
                    <div
                        style={{ marginBottom: "20px" }}
                        className="col-12 col-md-6"
                    >
                        <p>
                            Playing NFL Football is now easier and more Fun.
                            Choose any playing &nbsp;formats in all your
                            favorite sports to keep the fun going throughout the
                            year. This ultimate fun won&rsquo;t burn your
                            pockets! &ndash; It&rsquo;s free.
                        </p>
                        <p>
                            Choose any of the below game mode to level up your
                            entertainment with ProSport.Guru:
                        </p>
                    </div>
                    <LeagueOptions />

                    <div className="sportLinks" style={{ marginTop: "30px" }}>
                        <a
                            href="#nfl-football-pools.html"
                            className="btn btn-light btn-sm"
                        >
                            Heads Up
                        </a>
                        <a
                            href="#start_pool/index8a11.html?dropdown=1"
                            className="btn btn-primary btn-sm"
                        >
                            Sports Booth
                        </a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto mx-auto">
                    <div className="image float-end imac">
                        <img src="assets/themes/paperclip/img/sports/nfl/imac-content.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFL;
