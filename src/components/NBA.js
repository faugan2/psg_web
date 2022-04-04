import LeagueOptions from "./LeagueOptions";

const Game=()=>{
    return(
        <div role="tabpanel" className="tab-pane" id="NBA">
             <div className="row">
              <div className="col-md-7 col-sm-12">
              <h3>NBA Basketball - Take Your Shot To Win Exclusive Prize Pots!</h3>
              <h4>So, Get on the Hardwood and Play ProSport.Guru NBA Basketball in 5 Different Game Modes!</h4>
              <div style={{marginBottom:"20px"}}>
              <p>Choose any of the below game mode to level up your entertainment with ProSport.Guru Fantasy Pick&rsquo;em sports game:</p>
              </div>
              
              <LeagueOptions />
              </div>
               <div className="col-md-5 col-sm-12 text-right d-none d-md-block my-auto">
              <div className="float-end imac">
              <img />
              </div>
            </div>
          </div>
        </div>
    );
}

export default Game;