const Section6=()=>{
    return(
        <div className="sport-categories">
    <div className="row">
      <div className="col-sm-12">
      <h2 className="text-center" style={{fontSize:"2.2rem"}}>
      Here’s a List of Sports Categories and Match Formats to Play <br />– All of the Games, Zero Hassle!
      </h2>
      </div>
    </div> 
    <div className="row">
      <div>
        
        <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item"><a className="nav-link" href="#MLB" aria-controls="MLB" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">Baseball</a></li>
        <li className="nav-item"><a className="nav-link" href="#NBA" aria-controls="NBA" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">NBA Basketball</a></li>
        <li className="nav-item"><a className="nav-link" href="#NHL" aria-controls="NHL" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">NHL Hockey</a></li>
        <li className="nav-item"><a className="nav-link" href="#Olympics" aria-controls="Olympics" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">UFC</a></li>
        <li className="nav-item"><a className="nav-link active" href="#NFL" aria-controls="NFL" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">NFL Football</a></li>
        <li className="nav-item"><a className="nav-link" href="#CBB" aria-controls="CBB" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">College Basketball</a></li>
        <li className="nav-item"><a className="nav-link" href="#PGA" aria-controls="PGA" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">NCAA Basketball</a></li>
        <li className="nav-item"><a className="nav-link" href="#" aria-controls="CFB" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">More</a></li>
        
        </ul>
      

        <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="NFL">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3>Running your NFL pool has never been so easy!</h3>
              <h4>Regular season and Playoff formats available.</h4>
              <div style={{marginBottom:"20px"}} className="col-12 col-md-6">Choose from 8 different NFL football pool formats, which can be started at any point during the season.</div>
              <div className="row">
                <div className="col-9 col-md-6 text-start mx-auto" >
                <ul style={{minWidth: "220px"}}>
                  <li><a href="NFL-Survivor-Pools.html">Football Survivor Pools</a></li>
                  <li><a href="NFL-Pickem-Pools.html">Football Pick 'em Pools</a></li>
                  <li><a href="NFL-Squares-Pools.html">Football Squares Pools</a></li>
                  <li><a href="NFL-Confidence-Pools.html">Football Confidence Pools</a></li>
                  <li><a href="NFL-Margin-Pools.html">Football Margin Pools</a></li>
                </ul>
                </div>
                <div className="col-9 col-md-6 text-start mx-auto ">
                  <ul>
                  <li><a href="NFL-Credits-pools.html">Football Credits Pools</a></li>
                  <li><a href="NFL-33-Pools.html">Football 33 Point Pools</a></li>
                  <li><a href="NFL-Playoff-Pools-Power-Ranking.html">Power Ranking Playoff Pools</a></li>
                  <li><a href="nfl-playoff-precision-pools.html">Playoff Precision Pools</a></li>
                  </ul>
                </div>
              </div> 
               
              <div className="sportLinks" style={{marginTop:"30px"}}>
              <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                Heads Up
              </a>
              <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                Sports Booth
              </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto" >
              <div className="float-end imac">
              <img src="assets/themes/paperclip/img/sports/nfl/imac-content.png" />
              </div>
            </div>
          </div>
          </div>
        <div role="tabpanel" className="tab-pane" id="CBB">
            <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3>When March rolls around, be confident that your pool host is up to the task</h3>
              <div style={{marginBottom:"20px"}}>We offer 5 different formats for the Men's NCAA Basketball Tournament. Configurable scoring options are available.</div>
              <div className="col-9 col-md-6 text-start">
              <ul>
                <li><a href="NCAA-Bracket-Pool.html">Bracket Pools</a></li>
                <li><a href="march-madness-squares-pools.html">Squares Pools</a></li>
                <li><a href="ncaa-head-to-head-survivor.html">Head-to-Head Pools</a></li>
                <li><a href="march-madness-survivor-pools.html">Survivor Pools</a></li>
                <li><a href="NCAA-Pick8-Pool.html">Pick X Pools</a></li>
              </ul>
              </div>
              <div className="sportLinks" style={{marginTop:"30px"}}>
                <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                  Heads Up
                </a>
                <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                  Sports Booth
                </a>
                </div>
            </div>
             <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
              <div className="float-end imac">
              <img />
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="PGA">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3>We've got your Golf pool covered from tee to green!</h3>
              <h4>Multiple pool formats with many pick and scoring options.</h4>
              <div style={{marginBottom:"20px"}}>Whether you want to run a pool for the Majors or a weekly fantasy pool, we have a format that will meet your needs.</div>
              <div className="col-9 col-md-6 text-start">
              <ul>
                <li><a href="PGA-Golf-Majors-Pools.html">Major Championship Pools</a></li>
                <li><a href="Golf-Pick-One-Pools.html">Pick X Pools</a></li>
                
                <li><a href="pga-golf-fedexcup-playoff-pools.html">FedExCup Playoff Pools</a></li>
              </ul>
              </div>
              <div className="sportLinks" style={{marginTop:"30px"}}>
                <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                  Heads Up
                </a>
                <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                  Sports Booth
                </a>
                </div>
            </div>
             <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
              <div className="float-end imac">
              <img />
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="NBA">
             <div className="row">
              <div className="col-md-7 col-sm-12">
              <h3>Keep the excitement going with a season-long NBA pool!</h3>
              <h4>You can start a new pool at any time during the season!</h4>
              <div style={{marginBottom:"20px"}}>We simplify everything for not just your members, but you as well. Just spend a few minutes setting up your pool, selecting a few options, inviting members and viola! You'll have a full NBA season's worth of fun at your fingertips.</div>
              <div className="col-9 col-md-6 text-start">
               <ul>
                <li><a href="NBA-Pickem-Pools.html">NBA Pick 'em Pools</a></li>
                <li><a href="NBA-Survivor-Pools.html">NBA Survivor Pools</a></li>
                <li><a href="NBA-Playoff-Bracket-Pool.html">NBA Playoff Bracket Pools</a></li>
              </ul>
              </div>
              <div className="sportLinks" style={{marginTop:"30px"}}>
                <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                  Heads Up
                </a>
                <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                  Sports Booth
                </a>
                </div>
              </div>
               <div className="col-md-5 col-sm-12 text-right d-none d-md-block my-auto">
              <div className="float-end imac">
              <img />
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="MLB">
             <div className="row">
              <div className="col-md-6 col-sm-12">
              <h3>The easiest way to Pro Sport Guru this Baseball Season</h3>
              <h4>You can start a new pool at any time during the season!</h4>
              <div style={{marginBottom:"20px"}}>While America's past time isn't traditionally associated with office pools, we currently offers four great baseball pool formats to choose from.</div>
              <div className="col-9 col-md-6 text-start">
               <ul>
                <li><a href="Baseball-13Run-Pools.html">13-Run Baseball Pools</a></li>
                <li><a href="MLB-Home-Run-Derby-Pool.html">Home Run Pools</a></li>
                <li><a href="Baseball-Survivor-Pools.html">Baseball Survivor Pools</a></li>
                <li><a href="MLB-Squares-Pools.html">Baseball Squares Pools</a></li>
              </ul>
              </div>
              <div className="sportLinks" style={{marginTop:"30px"}}>
                <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                  Heads Up
                </a>
                <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                  Sports Booth
                </a>
                </div>
              </div>
               <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
              <div className="float-end imac">
              <img />
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="CFB">
           <div className="row">
              <div className="col-md-6 col-sm-12">
              <h3>Your College Bowl pool doesn't have to feel like hard work</h3>
              <h4>We'll lighten your workload and help you enjoy Bowl Season.</h4>
              <div className="col-9 col-md-6 text-start">
              <ul>
                <li><a href="College-Bowl-Confidence-Pools.html">College Bowl Confidence Pools</a></li>
                <li><a href="College-Bowl-Pickem-Pools.html">College Bowl Pick 'em Pools</a></li>
                <li><a href="College-Bowl-Squares-Pools.html">College Bowl Squares</a></li>
              </ul>
              </div>
              <div className="sportLinks" style={{marginTop:"30px"}}>
                <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                  Heads Up
                </a>
                <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                  Sports Booth
                </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
              <div className="float-end imac">
                <img />
              </div>
              </div>
            </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="NHL">
            <div className="row">
              <div className="col-md-6 col-sm-12">
              <h3>Make sure you're ready when the puck drops with our NHL Hockey Pools</h3>
              <h4>Regular season and playoff formats available.</h4>
              <div style={{marginBottom:"20px"}}>Run your Stanley Cup Playoff Bracket pool online this year. Our customizable scoring system allows for flexibility for the Pool Commissioner.</div>
              <div className="col-9 col-md-6 text-start">
              <ul>
                <li><a href="NHL-hockey-pickem-pools.html">NHL Pick 'em' Pools</a></li>
                 <li><a href="NHL-hockey-survivor-pools.html">NHL Survivor Pools</a></li>
                  <li><a href="NHL-Playoff-Bracket-Pool.html">NHL Playoff Bracket Pools</a></li>
              </ul>
              </div>
              <div className="sportLinks" style={{marginTop:"30px"}}>
                <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                  Heads Up
                </a>
                <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                  Sports Booth
                </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
              <div className="float-end imac">
                <img  />
              </div>
              </div>
            </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="Soccer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h3>From group play to the knockout stage, we make it easy to run your Football (American Soccer) pool!</h3>
              <h4>Run your World Cup or Euro Championship pool with us!</h4>
              <div className="col-9 col-md-6 text-start">
              <ul>
                <li><a href="fifa-world-cup-soccer-pools.html">2018 Men's World Cup Pools</a></li>
                <li><a href="fifa-world-cup-soccer-pools.html">2019 Women's World Cup Pools</a></li>
                <li><a href="UEFA-euro-soccer-pools.html">2020 UEFA Euro Pool</a></li>
              </ul>
              </div>
              <div className="sportLinks" style={{marginTop:"30px"}}>
                <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                  Heads Up
                </a>
                <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                  Sports Booth
                </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
               <div className="float-end imac">
                <img />
                </div>
              </div>
            </div>
          </div>
        <div role="tabpanel" className="tab-pane" id="Oscars">
          <div className="row">
            <div className="col-md-6 col-sm-12">
            <h3>Enjoy the Awards Season with your own private Oscars Pool</h3>
            <h4>Run it for friends & family, your office, or your clients.</h4>
            <div style={{marginBottom:"20px"}}>One of the most watched television events of the year.</div>
            <div className="col-9 col-md-6 text-start">
            <ul>
               <li><a href="Academy-Awards-Oscars-pools.html">Oscar Pools</a></li>
            </ul>
            </div>
            <div className="sportLinks" style={{marginTop:"30px"}}>
              <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                Heads Up
              </a>
              <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                Sports Booth
              </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
             <div className="float-end imac">
              <img />
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="Olympics">
         <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3>Go for the Gold!<br/>Available for both the Summer and Winter Olympics</h3>
            <h4>Create a roster of countries you think will have the best medal count.</h4>
            <div className="col-9 col-md-6 text-start">
            <ul>
               <li><a href="olympics-pool-pickem.html">Olympics Pools</a></li>
            </ul>
            </div>
            <div className="sportLinks" style={{marginTop:"30px"}}>
              <a href="#nfl-football-pools.html" className="btn btn-light btn-sm">
                Heads Up
              </a>
              <a href="#start_pool/index8a11.html?dropdown=1" className="btn btn-primary btn-sm">
                Sports Booth
              </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-right d-none d-md-block my-auto">
             <div className="float-end imac">
              <img />
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </div>
    </div> 

    
    <div className="sport-categories">
      <div className="row">
        <div className="col-sm-12">
        <h2 className="text-center">What Customers Say About Us</h2>
        </div>
      </div> 
      <div className="row">
      <div className="col-sm-6 col-md-6">
        <div className="feedback">
        <i className="fa fa-user fa-2x"></i>
        <div>
          <p>
          <em>We've run both a March Madness and a Pro Football Pool through ProSport.Guru.com. It's easy to set-up and easy for the players to use (with over 1000 players, that was very important to us). But what I was most impressed with compared to other sites we have used, is the quick response we received if we had any questions or concerns. Top notch service.
          </em><br/>
          <strong>&ndash;Panama Jack, Program Director, WGLX Radio, Wisconsin Rapids, WI. </strong>
          </p>
        </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-6">
        <div className="feedback">
        <i className="fa fa-user fa-2x"></i>
        <div>
          <p>
          <em>The amount of time I saved using ProSport.Guru.com made the service worth every penny. I ran my NCAA basketball pool and my NFL pool with ProSport.Guru.com this year, and both went off without a hitch ... something that's never happened before! Great customer service, too. I would highly recommend ProSport.Guru.com to anyone who is tired of running their pool by hand.</em><br/>
          <strong>&ndash;Steve Jordan, Tampa, FL</strong>
          </p>
        </div>
        </div>
      </div>
      <div className="hidden-sm col-md-4">
        <div className="feedback">
        <i className="fa fa-user fa-2x"></i>
        <div>
          <p>
          <em>I have run my football pool for years for my husband and friends. What a headache it has been until now. Thanks for a great service!</em><br/>
          <strong>&ndash;Lisa Kirros, Orange County, CA</strong>
          </p>
        </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="feedback">
        <i className="fa fa-user fa-2x"></i>
        <div>
          <p>
           <em> What a great experience. Saved me hours of work in Excel. Thanks!</em><br/>
           <strong>&ndash;Michael DeStefano, Poughkeepsie, NY</strong>
          </p>
        </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="feedback">
        <i className="fa fa-user fa-2x"></i>
        <div>
          <p>
          <em>This is a great marketing tool for those of us that want a lot of people playing. The staff at ProSport.Guru is great to work with and receptive of feedback.</em><br/>
          <strong>&ndash;Matthew Baizer, Danville, CA</strong>
          </p>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    );
}
export default Section6;