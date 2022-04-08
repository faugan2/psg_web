import LeagueOptions from "./LeagueOptions";

const Game=()=>{
    return(
        <div role="tabpanel" className="tab-pane" id="GOLF">
         <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3>UFC - Pick Your Format and Add the Exclusive Excitement to the Games!</h3>
            <h4>Now You Can Enjoy the Excitement of Playing UFC with 5 Different Game Modes!</h4>
            <div style={{marginBottom:"20px"}}>
            <p>Let &nbsp;ProSport.Guru add exclusive excitement to your UFC game. 
                And sitback to experience the ultimate fun. Choose any playing &nbsp;formats from below in all your favorite sports to enjoy the excitement. This ultimate fun won&rsquo;t make a hole in your pocket! &ndash; No Signup fee and Zero Upfront Fees.</p>
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