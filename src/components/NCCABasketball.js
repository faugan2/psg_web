import LeagueOptions from "./LeagueOptions";

const Game=()=>{
    return(
        <div role="tabpanel" className="tab-pane" id="PGA">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3>NCAA Basketball - It’s All About Fun and Zero Hassle!</h3>
              <h4>With all of the Fun and None of the Work,  No One Can Do March Madness This Better!</h4>
              <div style={{marginBottom:"20px"}}>
              <p>Choose ProSport.Guru to play NCAA Basketball in order to experience the ultimate fun. 
                Choose any playing &nbsp;formats in all your favorite sports to keep the fun going throughout the year. 
                This ultimate fun won&rsquo;t burn your pockets! &ndash; It&rsquo;s free.</p>
<p>Choose any of the below game mode to level up your entertainment with ProSport.Guru:</p>
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
    )
}

export default Game;