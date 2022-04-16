import Header from "../components/Header";
import Footer from "../components/Footer";
import Faq from "react-faq-component";

const data = {
    title: "FAQs",
    rows: [
        {
            title: "Is ProSport.Guru really free to play?",
            content:
                "Yes, ProSport.Guru is a free-to-play pick’ em sports game. There is no sign-up fee, you can simply create your profile to pick and play without risk! As well as you will receive free PS.G crypto coins as a welcome bonus.",
        },
        {
            title: "Is ProSport.Guru Safe and Secure to Play?",
            content:
                "Hella yes! ProSport.Guru empowers you with the chance to pick and play games in a safe yet secure way. You do not need to risk your money for fun, we empower you to play with PS.G Crypto coins. ProSport.Guru is the best alternative to bigger sportsbooks and we encourage responsible gaming so that your dream of picking and playing doesn't turn into a nightmare.",
        },
        {
            title: "Why do I have to register to play?",
            content:
                "It’s mandatory for everyone to register. So, we can ensure that the contest is fair and you can track your progress too. ",
        },
        {
            title: "Is it legal to play ProSport.Guru Sports Pick’em Game?",
            content:
                "The ProSport.Guru is about gaming skills that makes it stand out from the gambling. You have to be at least 18 or older than that in order to play ProSport.Guru. As it is a skill-based game and not a gmabling site, ProSport.Guru is legal to play.",
        },
        {
            title: "Will you misuse my private information?",
            content:
                "We love our sports fans, and we will never take a chance to play with your information. Likewise, your personal data will be kept confidential and won’t  be misused, sold, leased, reused, disclosed or loaned.",
        },
        {
            title: "How do I earn a referral bonus when I refer a friend?",
            content:
                "It’s easy! When your referred friend joins the ProSport.Guru with invite feature. You will get a certain amount of PS.G crypto coin as a referral bonus.",
        },
        {
            title: "How many games can I play in a day/week or month?",
            content:
                "With ProSport.Guru, there is no limit on playing several games.  We empower sports fans to pick and play limitless games as well as we offer free games to play. We believe that- excitement doesn't have restricted boundaries!",
        },
        {
            title: "How can I register for the biggest free-to-play tournaments?",
            content:
                "You can now register for the tournament by clicking directly on the “tournament button”. After signing up, click on the tournament tab to join. We will make sure that the promotion of the tournament will be done on the top of the website and app.",
        },
        {
            title: "If I win the tournament, what will I get as a reward?",
            content:
                "Winners of the tournament are rewarded with big prize pots such as PS.G crypto coins or PS.G merchandise. The prize will be highlighted when you join the tournament. ",
        },
        {
            title: "How can I redeem my PS.G Crypto coins?",
            content:
                "You can redeem your PS.G crypto coins by playing pro features, buying exclusive PS.G merchandise, and more. If you want to trade the PS.G Crypto Coins or do something else with our coins outside of the PSG app, then you have to install the Solflare app and create a wallet. That’s it. The wallet ID will be generated automatically as soon as you create the wallet,  and after that we will make a transfer of your Ps.G coins to your Solflare wallet.",
        },
        {
            title: "How many types of bonuses do I get?",
            content: `With ProSport.Guru, you are rewarded with two types of bonus namely:
        Welcome Bonus - ProSport.Guru offers you the welcome bonus of 50 PS.G crypto coins.
        Refer a Friend Bonus: This bonus is awarded to you when you invite and refer a friend.
        Daily Reward: ProSport.Guru also offers the daily reward of 1 free coin if you visit the app daily whether you play or not. 
        `,
        },
        {
            title: "How Can I keep track of my achievements?",
            content:
                "You do not need to worry about that, just sit back and keep winning. Our Locker room feature helps you to see all the completed yet active match results as well as the Trophy Room helps you to showcase the trophies and achievements you have earned.",
        },
        {
            title: "If I have a problem how long will it take to get a reply from you?",
            content:
                "If you configure any problem you can contact us at any time. We are here to help you with our turnaround time within 24 hours of  working days. ",
        },
    ],
};

const styles = {
    bgColor: "transparent",
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: "#d4d4d4",
    arrowColor: "white",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true,
};

const Faqs = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Faq data={data} styles={styles} config={config} />
            </div>
            <Footer />
        </div>
    );
};

export default Faqs;
