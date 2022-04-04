import NFL from "./NFL";
import CollegeFootball from "./CollegeFootball";
import NCCABasketball from "./NCCABasketball";
import NBA from "./NBA";
import MLB from "./MLB";
import NHL from "./NHL";
import UFC from "./UFC";
import GOLF from "./GOLF";

const Section6=()=>{
    return(
        <div className="sport-categories">
    <div className="row">
      <div className="col-sm-12">
      <h2 className="text-center" style={{fontSize:"2.2rem"}}>
      Here’s a List of Sports Categories and Match Formats to Play – All of the Games, Zero Hassle!
      </h2>
      </div>
    </div> 
    <div className="row">
      <div>
        
        <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item"><a className="nav-link" href="#MLB" aria-controls="MLB" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">Baseball</a></li>
        <li className="nav-item"><a className="nav-link" href="#NBA" aria-controls="NBA" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">NBA Basketball</a></li>
        <li className="nav-item"><a className="nav-link" href="#NHL" aria-controls="NHL" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">NHL Hockey</a></li>
        <li className="nav-item" style={{display:"none"}}><a className="nav-link" href="#Olympics" aria-controls="Olympics" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">UFC</a></li>
        <li className="nav-item"><a className="nav-link active" href="#NFL" aria-controls="NFL" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">NFL Football</a></li>
        <li className="nav-item"><a className="nav-link" href="#CBB" aria-controls="CBB" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">College Football</a></li>
        <li className="nav-item"><a className="nav-link" href="#PGA" aria-controls="PGA" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">NCAA Basketball</a></li>
        <li className="nav-item"><a className="nav-link" href="#GOLF" aria-controls="GOLF" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">GOLF</a></li>
        <li className="nav-item" style={{display:"none"}}><a className="nav-link" href="#" aria-controls="CFB" role="tab" data-bs-toggle="tab" onclick="loadImage(this);">More</a></li>
        
        </ul>
      

        <div className="tab-content">
        <NFL />
        <CollegeFootball />
        <NCCABasketball />  
        <NBA />
        <MLB />
        <NHL />
        <UFC />
        <GOLF />
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