import LeagueOptions from "../LeagueOptions";

const Game = () => {
    return (
        <div role="tabpanel" className="tab-pane" id="CBB">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3>
                        College Football - It’s Time For the Non-Stop
                        Excitement, Every Shot is now a Thriller
                    </h3>
                    <h4>
                        Play PS.G College Football, Snap the ball and Score
                        enough to Bring Home the Bacon!
                    </h4>
                    <div style={{ marginBottom: "20px" }}>
                        <p>
                            Get in the game and play in these most exciting
                            match formats for non-stop excitement and fun all
                            through the season!&nbsp;
                        </p>
                        <p>
                            Choose any of the below game mode to level up your
                            entertainment with ProSport.Guru Pick&rsquo;em
                            sports game:{" "}
                        </p>
                    </div>

                    <LeagueOptions />
                </div>
                <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
                    <div className="float-end imac">
                        <img />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Game;
