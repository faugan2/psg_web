import "../styles/sections/section5.scss";

const Section5 = () => {
    return (
        <div className="sportpage pt-1">
            <h2 className="text-center" style={{ fontSize: "2.2rem" }}>
                What Makes ProSport.Guru Best Than the Rest Out There? –
                Connecting Sports Fans to the Sports They Love
            </h2>
            <div className="row features row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 zone3">
                <div className="col feature-block">
                    <div className="fas fa-flag-alt"></div>
                    <div className="feature-head">Play Like a Pro</div>
                    <div className="feature-text">
                        You can now play any fantasy sports games like a pro by
                        choosing from the wide range of season long games in 9
                        different sports!
                    </div>
                </div>
                <div className="col feature-block">
                    <div className="fas fa-ticket-alt"></div>
                    <div className="feature-head">
                        Invite Your Friends to Compete{" "}
                    </div>
                    <div className="feature-text">
                        You can now choose the game mode and create a challenge
                        to compete with family or friends by inviting with just
                        a single tap! Not sure who to play with? Join public
                        games with other sports fans around the world.
                    </div>
                </div>

                <div className="col feature-block">
                    <div className="fas fa-ticket-alt"></div>
                    <div className="feature-head">
                        Join a Tournament to Win Big Prizes
                    </div>
                    <div className="feature-text">
                        Get a chance to join a tournament amongst the sports
                        fans from all around the world and win to grab the grand
                        prize pot!
                    </div>
                </div>

                <div className="col feature-block">
                    <div className="fas fa-ticket-alt"></div>
                    <div className="feature-head">Pick your Game to Play</div>
                    <div className="feature-text">
                        PS.G players have the privilege to choose the game based
                        on total game score/ point spread. They can even choose
                        the desired match including a wide range of games i.e
                        3,5,7 or 9 games.
                    </div>
                </div>

                <div className="col feature-block">
                    <div className="fas fa-sliders-h"></div>
                    <div className="feature-head">Ramp Up the Interaction</div>
                    <div className="feature-text">
                        ProSport.Guru adds a lot of fun by empowering sports
                        fans to connect, banter and do trash-talk with their
                        league mates, fellow fans, and opponents.
                    </div>
                </div>

                <div className="col feature-block">
                    <div className="fas fa-sliders-h"></div>
                    <div className="feature-head">Trophy Room</div>
                    <div className="feature-text">
                        Let your Trophy room do all the talking about your
                        picking talent. This feature enables you to showcase
                        your expertise and trophies.
                    </div>
                </div>

                <div className="col feature-block">
                    <div className="fas fa-edit"></div>
                    <div className="feature-head">Locker-room</div>
                    <div className="feature-text">
                        The award-winning Locker room feature enables the
                        players to oversee all the active yet completed match
                        results with just a single tap!
                    </div>
                </div>

                <div className="col feature-block">
                    <div className="fas fa-chart-pie"></div>
                    <div className="feature-head">Play Pro with Debbie</div>
                    <div className="feature-text">
                        ProSport.Guru enables the sports fans to play 1-On-1
                        with Debbie- an AI character that is a Pro sport
                        handicapper. Try your luck and compete against Debbie to
                        win exclusive PS.G Merchandise. Good Luck!
                    </div>
                </div>
            </div>

            <div className="zone2">
                <div className="text">
                    Play the #1 pick’em game that’s 100% Free to Win PS.G Crypto
                    Coins and Exclusive Merchandise!
                </div>
                <div style={{ display: "inline-block" }}>
                    <a
                        className="btn btn-light"
                        href="#pick5/index.html"
                        onclick="setCookie('suppressPick5Banner',1,30);"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Section5;
