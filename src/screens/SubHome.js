import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/subhome.scss";
import { ArrowRight } from "@material-ui/icons";
import headsUp from "../components/img/heads_up.png";
import sportsBooth from "../components/img/sports_booth.png";
import oldLadyCoins from "../components/img/old_lady_coins.png";

const List = ({ list }) => {
    return list.map((element) => {
        return (
            <div className="element">
                <div className="header">
                    <ArrowRight className="icon" />
                    <div className="name">{element.name}</div>
                </div>
                <div className="content">{element.content}</div>
                <br />
            </div>
        );
    });
};

const Content = ({ children, title }) => {
    return <div className={title ? "content-title" : ""}>{children}</div>;
};

const Section = ({ title, children }) => {
    return (
        <div className="section">
            <h1>{title}</h1>
            <div className="content">{children}</div>
        </div>
    );
};

const SubHome = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Section title="Get in the Game with ProSport.Guru -  The Most Exciting Place to Experience the Sweat!">
                    <Content>
                        With our best playing game modes, you’ve got a new way
                        to level up your excitement. Players get on the
                        hardwood, and experience the most exciting game modes!
                        It’s time to experience the ultimate fun with all of the
                        game modes. This is just a tip of an iceberg because
                        apart from game modes you can now choose two different
                        game styles too!
                    </Content>
                    <Content>Play any of the games in two styles:</Content>
                    <List
                        list={[
                            {
                                name: "Most Wins:",
                                content:
                                    "In the most wins game style, the player while making picks, has the most total number of games correctly picked than all the opponents irregardless of any order then that player wins in the end.",
                            },
                            {
                                name: "Longest Winning Streak:",
                                content:
                                    "The longest winning streak game style measures as well as ranks your total picks. If the player has the longest combination of winning the picks in a row, then that player will win. Such as,  if you play longest winning streak and your #1 ranked game loses but #2 & #3 picks won then for this game you would be on a 2 game winning streak. In order to defeat you the other player must have to get all 3 picked correctly..",
                            },
                        ]}
                    ></List>
                    <Content>
                        There are millions of gamers around the world playing
                        fantasy games every day. They are all hungry for new
                        types of game modes to follow their passion. We
                        understand their needs deeply. That is the reason we
                        have this wide range of game modes for everyone to play
                        and enjoy. Our ProSport.Guru fantasy pick’em game has
                        been loaded with exciting game modes for every game.
                    </Content>
                </Section>
                <Section title="Introducing the Most Exciting Game Modes of ProSport.Guru - Experience The Non-Stop Excitement!">
                    <Content title>
                        Heads Up to Compete For One on One with Your Friend!
                    </Content>
                    <Content>
                        This is the best of all the modes. In the Heads Up Game
                        mode of ProSport.guru two players are allowed to play
                        the game. There is no signup fee. You can even invite
                        your friends, roommates, workmates to compete with you
                        by playing the heads-up game mode. The ProSport.Guru
                        allows you to play the Heads-Up game mode in all the
                        desired sports games. Then, What are you waiting for?
                        Just sign up, rack up your PS.G coins by competing
                        against your friends and bring home the bacon!
                    </Content>
                    <img className="image" src={headsUp} alt="heads_up"></img>
                    <Content title>
                        Sports Booth - Take a Shot to Play with 3 to 10
                        Multi-Players
                    </Content>
                    <Content>
                        In Sports Booth game mode you can invite 3 to 10 players
                        per game. The players can join from all around the world
                        and at any time. You can invite your friends, workmates
                        to play any of the sports games and achieve the top spot
                        on the leaderboard to earn exclusive prizes! Besides
                        inviting your friends to the sports booth you can even
                        interact with them because you just don't want to play -
                        You want to experience the excitement. And by joining
                        the ProSport.Guru pick’em games you are signing up for
                        the Non-Stop Excitement!
                    </Content>
                    <img
                        className="image"
                        src={sportsBooth}
                        alt="sports_booth"
                    ></img>
                    <Content title>Free-to-play Tournaments</Content>
                    <Content>
                        In the Free-to-Play Tournaments of ProSport.Guru, there
                        are a large number of players from all around the world
                        competing against each other. It’s our most fan-favorite
                        playing option where you can play along with the sports
                        fans from anywhere and anytime. Ramp your rivalry,
                        compete for your ultimate glory and test your skills to
                        win the exclusive prizes. This playing option will be
                        the most exciting to play - I Bet on that!
                    </Content>
                    <Content title>Play Pro with Debbie</Content>
                    <Content>
                        Tired of losing every time? Well, there is someone who
                        can help you change that - Debbie. It is an AI sports
                        handicapper. While playing pro with Debbie, she randomly
                        picks and challenges players for 1-on-1 challenges.
                        Well, it’s not an easy task to beat her but if you win
                        then you can achieve the upper level. She helps you in
                        optimizing your picking skills. Apart from that, you can
                        compete with Debbie to win the exclusive ProSport.Guru
                        merchandise.
                    </Content>
                    <img
                        className="image"
                        src={oldLadyCoins}
                        alt="old_lady_coins"
                    ></img>
                </Section>
                <Section title="What Makes ProSport.Guru The #1 Pick'em Game than Average One’s Out There?">
                    <Content title>
                        The Locker room - Your Third Eye to Monitor Ongoing and
                        Completed Matches
                    </Content>
                    <Content>
                        The locker room empowers the players to oversee and
                        monitor the match result of all the active as well as
                        completed match results within a split of second.
                    </Content>
                    <Content title>Easy Sign Up</Content>
                    <Content>
                        You can join and play within minutes, it’s just a 3-step
                        process. As well as you can invite members from any
                        corner of the world.
                    </Content>
                    <Content title>There is no Sign-Up Fee</Content>
                    <Content>
                        You can join and play ProSport.Guru for free. We do not
                        charge any sign up fees- The Sign-up is 100% free.
                    </Content>
                    <Content title>Private message board</Content>
                    <Content>
                        ProSport.Guru empowers you along with a free message
                        board.It is a great way to communicate with members.
                        Post your rules, banter, do trash talk, and communicate
                        with other members.
                    </Content>
                    <Content title>Wide Range of Sports Games</Content>
                    <Content>
                        ProSport.Guru has 9 varied ranges of fantasy sports
                        games to play. All of the games can be played with
                        varied different game modes as mentioned above.
                    </Content>
                    <Content title>Free Signup Bonus</Content>
                    <Content>
                        After signing up, the ProSport.Guru offers you the
                        sign-up bonus of 50 PS.G Crypto coins for free! What are
                        you waiting for then? - Start signing up and keep on
                        playing players!
                    </Content>
                </Section>
                <Section title="Are You Ready To Play the Most Exciting Games For Non-Stop Excitement?">
                    <Content>
                        Are you ready to enjoy the best Pick’em sports game in
                        the world? If yes, then Just register for free and join
                        the action. Grab your chance to win exclusive prizes.
                        Our Pick’em game is simple to join, easy to manage yet
                        fun for everyone! Good luck at the game.
                    </Content>
                </Section>
            </div>
            <Footer />
        </div>
    );
};

export default SubHome;
