import "../styles/header.scss";
import logo from "./img/logo.svg";
const Header=()=>{
    return(
        <header className="navbar navbar-expand-lg navbar-light">
		  <div className="container branding-standard" >
		    
        <a className="navbar-brand" href="index.html">
            <img  src={logo} />
        </a>
        <div className="top-navigation">
  		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
            <div className="authentication logged-out">
              <a className="btn btn-primary btn-lg nav-link"  onClick2="$('#loginModal').modal('show');$('.modal-open').addClass('blur');">Log In</a>
            </div>
          

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="#start_pool/index.html">Play Heads Up</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#join/index.html">Play Sports Booth</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our Services
                </a>
                <div className="dropdown-menu multi-column columns-2" aria-labelledby="navbarDropdown">
                    <div className="row" style={{marginRight:"0px"}}>
                    <div className="col-sm-6 poolTypesColumn">
                        <div className="multi-column-head">Pool Hosting</div>
                        <div className="multi-column-dropdown">
                        <ul>
                            <li><a className="dropdown-item" href="#nfl-football-pools.html">NFL Football Pools</a></li>
                            <li><a className="dropdown-item" href="#march-madness-pools.html">March Madness Pools</a></li>
                            <li><a className="dropdown-item" href="#Golf/index.html">PGA Golf Pools</a></li>
                            <li><a className="dropdown-item" href="#baseball-pools.html">Baseball Pools</a></li>
                            <li><a className="dropdown-item" href="#NHL/index.html">Hockey Pools</a></li>
                            <li><a className="dropdown-item" href="#College-Football-Pools.html">College Football Pools</a></li>
                            <li><a className="dropdown-item" href="#olympics-pool-pickem.html">Olympics Pools</a></li>
                            <li><a className="dropdown-item" href="#fifa-world-cup-soccer-pools.html">Soccer Pools</a></li>
                            <li><a className="dropdown-item" href="#Academy-Awards-Oscars-pools.html">Academy Awards Pools</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 solutionsColumn">
                        <div className="multi-column-head">Solutions</div>
                        <div className="multi-column-dropdown">
                        <ul>
                            <li><a href="#branding.html" className="dropdown-item">Pool Branding<div className="solutionText">Customize the user experience to fit with your organization's brand or personal style.</div></a></li>
                            <li><a href="#fundraising.html" className="dropdown-item">Fundraising Ideas<div className="solutionText">Some great ideas on how to use our services  to help with your non-profit fundraising.</div></a></li>
                            <li><a href="#marketing.html" className="dropdown-item">Marketing &amp; Promotion<div className="solutionText">Pools provide an exciting way to reach new clients or retain your existing ones.</div></a></li>
                            <li><a href="#restaurants-bars.html" className="dropdown-item">Restaurants &amp; Bars<div className="solutionText">Require your customers to be at your establishment in order to participate.</div></a></li>
                            <li><a href="#customSolutions.html" className="dropdown-item">Custom Solutions<div className="solutionText">If our out of the box service won't work for you, we specialize in custom client solutions.</div></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#blog/index.html">Blog</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#support/index.html">Support</a>
                </li>
                
            </ul>
            </div>
        </div>
		  </div>
		</header>
    );
}

export default Header;