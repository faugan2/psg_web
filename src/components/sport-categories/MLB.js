import LeagueOptions from "../LeagueOptions";

const Game = () => {
    return (
        <div role="tabpanel" className="tab-pane" id="MLB">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3>
                        Baseball- It’s Simple to Play But Challenging to Win!
                    </h3>
                    <h4>
                        Take your Excitement to the Next Level with our 5
                        Exciting Game Modes
                    </h4>
                    <div style={{ marginBottom: "20px" }}>
                        <p>
                            It can be difficult to find the match formats that
                            are simple and challenging at the same time. But
                            don&apos;t sweat it out! &nbsp;You can now play Golf
                            in 5 varied game modes, Choose any playing
                            &nbsp;formats &nbsp;to keep the fun going throughout
                            the year.&nbsp;
                        </p>
                        <p>
                            Choose any of the below game mode to level up your
                            entertainment with ProSport.Guru:
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
