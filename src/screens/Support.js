import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../components/img/support.jpeg";

function Box(props) {
    return (
        <div className="w-full">
            <div className="text-xl font-bold mb-3 my-auto">{props.header}</div>
            <div className="bg-black bg-opacity-20 p-4 rounded-lg">
                {props.children}
            </div>
        </div>
    );
}

const Support = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-1">
                        <Box header="We are here to help you with our technical support">
                            If you have any other technical questions/comments
                            then, we have a special customer support team to
                            help you with all your questions and get your
                            feedback. ProSport.Gurui is proud to have a
                            dedicated service team that works for you.
                        </Box>
                        <Box header="So, what are you waiting for?">
                            Take a deep dive into the wave fantasy sports pick
                            'em game. It’s time to test your skills and pick the
                            right player!
                        </Box>
                        <div className="font-bold space-y-5">
                            <div>
                                Don’t Miss Out to Witness the Non-Stop
                                Excitement with ProSport.Guru!
                            </div>
                            <div>
                                Please mail us at:{" "}
                                <span className="text-indianred">
                                    Prosportdotguru@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <img
                        src={image}
                        alt="img"
                        className="h-[33rem] m-auto skew-y-3 drop-shadow-xl rounded-lg"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Support;
