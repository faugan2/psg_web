import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/contact.scss";

const Contact = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="contact-title">CONTACT US</div>
                <div className="contact-content">
                    <div>
                        Our relationship with our customers is the main aspect
                        of our services. If you have questions about the games
                        then please email us at —----------.If you have
                        additional questions, please contact us via email. We
                        would love to respond to any inquiries that you could
                        have.
                    </div>
                    <br />
                    <div>
                        We would love to hear from our sports fans- We are all
                        ears. Feel free to fling your questions, suggestions,
                        comments, and more. Tell us what's great or what we are
                        missing, so we can make sure you are enjoying your
                        fullest. Contact us, If you face any difficulties while
                        picking and playing with the PS.G app. You have your
                        friendly folks standing by you. We are sitting here and
                        starving for feedback, do not forget to give one!
                    </div>
                    <br />
                    <div>
                        For technical support and other questions/comments
                        please go to our support section.
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
