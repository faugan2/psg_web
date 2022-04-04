import LeagueOptions from "./LeagueOptions";

const Game=()=>{
    return(
        <div role="tabpanel" className="tab-pane" id="Olympics">
         <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3>Go for the Gold!<br/>Available for both the Summer and Winter Olympics</h3>
            <h4>Create a roster of countries you think will have the best medal count.</h4>
            <div style={{marginBottom:"20px"}}>slfjslfsjf</div>
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