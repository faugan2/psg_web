import Header from "../components/Header";
import Footer from "../components/Footer";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Section6 from "../components/sections/Section6";
import SectionHowToPlay from "../components/SectionHowToPlay";
import Faq from "../components/Faq";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="homepage">
                    <Section1 />
                    <SectionHowToPlay />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Faq />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
