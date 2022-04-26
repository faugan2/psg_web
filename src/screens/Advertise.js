import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from "@material-ui/icons";
import { useState } from "react";
import basketball from "../components/img/basketball.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRectangleAd,
    faStar,
    faPhotoFilm,
    faArrowPointer,
    faCoins,
    faGears,
} from "@fortawesome/free-solid-svg-icons";

function Section(props) {
    return (
        <div
            className={`${props.frame ? "bg-black border-b" : ""} ${
                props.bg ? "bg-indianred bg-opacity-100" : ""
            } bg-opacity-20 w-full h-full p-6 flex rounded-lg border-indianred`}
        >
            <div className="m-auto">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <div className={props.frame ? "opacity-70" : "mt-4"}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

function List(props) {
    return (
        <div className="grid grid-cols-3 gap-6">
            {props.list.map((element) => {
                return (
                    <div
                        onClick={element.onclick}
                        className={`${element.style} bg-indianred p-2.5 rounded-md hover:bg-opacity-80 transition cursor-pointer flex`}
                    >
                        <div className="m-auto flex">
                            <FontAwesomeIcon
                                icon={element.icon}
                                className="my-auto fa-2x bg-opacity-20 rounded-md p-2.5 mr-2"
                            />
                            <div className="my-auto">
                                {element.more && <ArrowRight />}
                                {element.text}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function Image(props) {
    return (
        <div className="">
            <img
                src={props.src}
                alt={props.src}
                className="rounded-lg skew-y-3 drop-shadow-xl scale-75"
            />
            {props.children}
        </div>
    );
}

const Advertise = () => {
    const [more, setMore] = useState(false);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="text-center">
                    <div className="grid grid-cols-2 gap-12">
                        <Section
                            title="Don’t Miss Out On a Chance to Get Noticed By the Zillions of Sports Fans Around the World!"
                            frame
                        >
                            Advertising with ProSport.Guru can definitely boost
                            your brand presence. Because we bring you closer to
                            millions of fantasy sports fans in just one place.
                            It's the best way to build your brand in the fantasy
                            sports community. Don't miss out on this huge
                            opportunity to grow big with the fastest growing
                            online sports app in the sports industry!
                        </Section>
                        <Section
                            title="Why Advertise With ProSport.Guru? - Your Marketing Partner in Digital Age"
                            frame
                        >
                            The ProSport.Guru Pick’em sports game has a wide yet
                            large user base from all around the world. This can
                            help you to reach out to the zillions of sports fans
                            residing in all the corners of the world.
                            ProSport.Guru has all the resources you need to
                            succeed including the promotional materials. Take
                            advantage of this great advertising package that
                            brings your brand to your sports fans with us. As
                            ProSport.Guru has a new fan base of sports lovers
                            from all the corners of the world it can open the
                            doors of profit for you.
                        </Section>
                        <div className="col-span-2">
                            <Section title="Wide Range of Advertising Solutions to Reach Your Audience">
                                <List
                                    list={[
                                        {
                                            text: "Standard Banner Ads",
                                            icon: faRectangleAd,
                                        },
                                        { text: "Premium Ads", icon: faStar },
                                        {
                                            text: "Premium Video Ads",
                                            icon: faPhotoFilm,
                                        },
                                        {
                                            text: "Custom Ads",
                                            icon: faGears,
                                        },
                                        {
                                            text: "Sponsored Post",
                                            icon: faArrowPointer,
                                        },
                                        {
                                            text: "Sponsored Video",
                                            icon: faCoins,
                                        },
                                        {
                                            text: "Featured Ad in Reward Panel",
                                            more: true,
                                            style: "col-start-2",
                                            onclick: () => setMore(!more),
                                        },
                                    ]}
                                />
                            </Section>
                        </div>
                        {more && (
                            <div className="col-span-2">
                                <Section bg>
                                    In this package, you can showcase your brand
                                    ad/poster to our zillions of PS.G Sports
                                    fans when they redeem their daily bonus. As,
                                    the daily bonus is the rewarded bonus
                                    offered to the player for visiting the app
                                    daily. If you select this advertisement
                                    package then the ad will be placed in the
                                    daily bonus panel, which will be viewed by
                                    every single player on every single day
                                    while redeeming the bonus.
                                    <div className="font-bold text-xl my-4">
                                        <ArrowRight />
                                        Featured Ad on Homepage:
                                    </div>
                                    There’s no place like home when you are
                                    marketing it gives your brand the greatest
                                    visibility of all. In this advertisement
                                    package, you can showcase your brand
                                    ad/poster on the homepage of our app. It can
                                    be anything whether you are launching a new
                                    product, products on sale, and more. When
                                    you choose to feature your advert on the
                                    home page, without a doubt your advert will
                                    stand out from the rest!
                                    <div className="font-bold text-xl my-4">
                                        <ArrowRight />
                                        Weekly Sponsorships for Heads Up Matches
                                    </div>
                                    Let the sports fans know what you are
                                    selling quickly. By sponsoring the weekly
                                    heads-up matches, your brand ad can be
                                    viewed by billions of players/sports fans.
                                    Being the sponsored partner your brand will
                                    get the greatest reach of all - it’s the
                                    most assured way to sell or advertise your
                                    product!
                                    <div className="font-bold text-xl my-4">
                                        <ArrowRight />
                                        Weekly Sponsorships for Sports booth
                                        Match
                                    </div>
                                    As the Sports booth is the most prominent
                                    feature of PS.G it's an all-time favorite of
                                    PS.G players. By sponsoring the weekly
                                    sports booth matches( matches having 3 to 10
                                    players) you can make your brand visible to
                                    every single player from every nook and
                                    cranny of the world. When you sponsor a
                                    sports booth match it boosts your
                                    visibility, as well as your ads will get
                                    noticed more often. With buying this
                                    sponsorship, you just have to relax back to
                                    see how your brand is boosting!
                                    <div className="font-bold text-xl my-4">
                                        <ArrowRight />
                                        Sponsor the Prestigious Tournament
                                        Rewards - Your Secret Weapon to Increase
                                        Your Brand Visibility
                                    </div>
                                    Think outside the banner and video ads. With
                                    our advertising opportunity, you can sponsor
                                    your merchandise as the reward for the
                                    tournaments. It's the most trustworthy way
                                    to reach millions of audiences on one
                                    platform, having them competing for your
                                    merchandise. Our rapidly expanding user
                                    community will increase your brand exposure
                                    as well. It's an ad-block-friendly way to
                                    make your brand more visible.
                                </Section>
                            </div>
                        )}
                        <Image src={basketball}>
                            <div className="">
                                What are you waiting for? Promote your business
                                now with ProSport.Guru to grow your business
                                stronger!
                            </div>
                            <div className="mt-2">
                                For partnership and business questions, please
                                contact or send an inquiry to our management
                                team:{" "}
                                <span className="animate-pulse text-indianred">
                                    Prosportdotguru@gmail.com
                                </span>
                            </div>
                        </Image>
                        <Section title="We pride ourselves to build long-term partnerships with our advertisers.">
                            <div>
                                If you are interested in sponsoring, advertising
                                by placing the banner images, banner videos, and
                                more then please send the mail on the below
                                contact details and we will contact you with the
                                availability of spots to place the banners,
                                marketing details, and demographics
                            </div>
                            <div className="mt-2">
                                Being a pioneer we have a long history of
                                working with corporate sports companies and we
                                have prominent knowledge of sports marketing.
                                That is the reason we have varied types of
                                advertising and marketing solutions that are
                                budget-friendly.
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Advertise;
