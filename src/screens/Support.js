import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/support.scss";

const Support = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="support-title">SUPPORT</div>
                <div className="support-content">
                    <div className="support-row">
                        We are here to help you with our technical support. If
                        you have any other technical questions/comments then, we
                        have a special customer support team to help you with
                        all your questions and get your feedback. ProSport.Gurui
                        is proud to have a dedicated service team that works for
                        you.
                    </div>
                    <div className="support-row">
                        So, what are you waiting for? Take a deep dive into the
                        wave fantasy sports pick 'em game. It’s time to test
                        your skills and pick the right player!
                    </div>
                    <div className="support-row">
                        Don’t Miss Out to Witness the Non-Stop Excitement with
                        ProSport.Guru!
                    </div>
                    <div className="support-row">Please mail us at ..</div>
                    <div className="support-row"> Contact us at: ..</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Support;
