import "../styles/faq.scss";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
const data = {
    title: "FAQ",
    rows: [
        {
            title: "Is ProSport.Guru really free to play?",
            content: `Yes, ProSport.Guru is a free-to-play pick’ em sports game. There is no sign-up fee, you can simply create your profile 
            to pick and play without risk! As well as you will receive free PS.G crypto coins as a welcome bonus.`,
        },
        {
            title: "Is ProSport.Guru Safe and Secure to Play?",
            content:`Hella yes! ProSport.Guru empowers you with the chance to pick and play games in a safe yet secure 
            way. You do not need to risk your money for fun, we empower you to play with PS.G Crypto coins.
             ProSport.Guru is the best alternative to bigger sportsbooks and we encourage responsible gaming so that your dream of picking and playing doesn't turn into a nightmare.
            `,
        },
        {
            title: "Why do I have to register to play?",
            content: `It’s mandatory for everyone to register. 
            So, we can ensure that the contest is fair and you can track your progress too.`,
        },
        {
            title: "s it legal to play ProSport.Guru Sports Pick’em Game?",
            content:`The ProSport.Guru is about gaming skills that makes it stand out from the gambling. You have to be at least 18 or older than that in order to play ProSport.Guru. 
            As it is a skill-based game and not a gmabling site, ProSport.Guru is legal to play.`,
        },
        {
            title:"Will you misuse my private information?" ,
            content:`We love our sports fans, and we will never take a chance to play with your information. Likewise, your personal data will be kept confidential and won’t  be
             misused, sold, leased, reused, disclosed or loaned.`
        },
        {
            title:"How do I earn a referral bonus when I refer a friend?",
            content:`It’s easy! When your referred friend joins the ProSport.Guru with invite feature. 
            You will get a certain amount of PS.G crypto coin as a referral bonus.`
        }
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "indianred",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};


const config = {
    animate: true,
     arrowIcon: "V",
     tabFocus: true
};

const  Faqc =()=>{

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
export default Faqc;