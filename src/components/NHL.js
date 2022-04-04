import LeagueOptions from "./LeagueOptions";

const Game=()=>{
    return(
        <div role="tabpanel" className="tab-pane" id="NHL">
            <div className="row">
              <div className="col-md-6 col-sm-12">
              <h3>NHL Hockey- With ProSport.Guru Get Closer to the On-Ice Action!</h3>
              <h4>Playing ProSport Guru NHL Hockey, Feels like You Are Inside the Glass</h4>
              <div style={{marginBottom:"20px"}}>
              <p>Just spend a second choosing any of the below game mode and let us level up your entertainment with ProSport.Guru Pickem&rsquo; sports game:</p>
              </div>
              
              <LeagueOptions />
              </div>
              <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
              <div className="float-end imac">
                <img  />
              </div>
              </div>
            </div>
        </div>
    );
}

export default Game;