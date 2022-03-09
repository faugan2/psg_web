import "../styles/section2.scss";
import heads_up from "./img/heads_up.png";
import sports_booth from "./img/sports_booth.png";
import marketplace from "./img/marketplace.png";
import experience from "./img/experience.png";

const Section2=()=>{
    return(
        <div className="how">
        <h2>HOW IT WORKS</h2>
        <div className="how_lines">
          <div className="how_line">
            <h3>A Game</h3>
            <div className="a_game_top">
              <div>
                <h4>HEADS-UP</h4>
                <div className="a_game_line">
                  <img src={heads_up} />
                  <button>
                    <label>2</label>
                    <label>PLAYERS</label>
                  </button>
                </div>
              </div>
              <div>
                <h4>SPORTS-BOOTH</h4>
                <div className="a_game_line">
                  <img src={sports_booth} />
                  <button>
                    <label>3 to 10</label>
                    <label>PLAYERS</label>
                  </button>
                </div>
              </div>
            </div>
    
            <div className="how_line_info">
              <h4>CHOOSE YOUR GAME</h4>
              <p>
                Select from a list of public games or invite friends and family
              </p>
            </div>
          </div>
          <div className="how_line">
            <h3>A Marketplace</h3>
            <img src={marketplace} />
            <div>
              <h4>PLAY YOUR MATCH</h4>
              <p>
                Pick your games based on point spread and/or total game score.
    Most wins or longest winning streak of 3,5,7 or 9 games
    
              </p>
            </div>
          </div>
          <div className="how_line">
            <h3>An Exeperience</h3>
            <img src={experience} />
            <div>
              <h4>EARN YOUR STATUS          </h4>
              <p>
                Compete to build your profile rating and stay at the top of the leader board. 
                Collect coins and win prizes.
              </p>
            </div>
          </div>
        </div>
      </div>  
    );
}

export default Section2;