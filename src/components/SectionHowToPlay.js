import "../styles/section_how_to_play.scss";
import banner from "./img/old_lady_stadium.png";
const SectionHowToPlay = () => {
    return (
        <div className="row section_how_to_play" style={{}}>
            <h1 style={{ textAlign: "center", fontSize: "2.2rem" }}>
                How to Play a ProSport.Guru Pick’em Fantasy Sports Game? – It’s
                Just Pick, Play and Win
            </h1>
            <div className="col-12 col-sm-6">
                <p className="callout">
                    <strong> Just Signup - It’s 100% Free!</strong>
                    Playing the PS.G Pick&rsquo;em sports game is easy and safe,
                    plus it only takes a few minutes to start. First, Simply
                    signup to get your free bonus of 50 PS.G Crypto coins and
                    then join the game to enjoy the action.{" "}
                </p>

                <p className="callout">
                    <strong>Join the Game to Choose and Play</strong>
                    As the action unfolds, after signing up you can either join
                    the public game or select the desired sports game.
                    ProSport.Guru empowers you with two different playing
                    options such as Heads Up and Sports Booth. You can choose
                    either of them to play. Once you pick the desired playing
                    option you can select any of the games based on Most Wins or
                    Longest Winning Streak.
                </p>

                <p className="callout">
                    <strong>
                        Invite Friends to Create a Challenge Or Join the
                        Tournament
                    </strong>
                    PS.G Players can invite their friends to create their own
                    challenge for the desired sports mode. After inviting your
                    friends you can create your dream team or revamp the rivalry
                    against your friends from anywhere at any time. Once, you
                    invite your friends do not miss out on joining the
                    tournaments –<b>A chance to win the PS.G Merchandise!</b>
                </p>
            </div>
            <div className="col-12 col-sm-6 col-banner">
                <img className="imgBanner" src={banner} alt="pool host" />
            </div>
        </div>
    );
};

export default SectionHowToPlay;
