import "./Home.scss"

//importing images
import DevImage from "../../assets/images/dev-image.svg";

//importing svg's
import {ReactComponent as DevIcon} from "../../assets/icons/dev-icon.svg";

function Home(){
    return(
        <div className="home-main-div" id="HOME">
            <section className="home-main-section">
                <div className="home-titles">
                    <div className="home-main-title">
                        <h1>Bienvenue dans mon monde</h1>
                        <span><DevIcon id="dev-icon"/></span>
                    </div>
                    <h2>Je suis Maxime Momin</h2>
                    <h3>Trainee System Engineer</h3>
                </div>
                <div className="home-image">
                    <img src={DevImage} alt="dev-image"></img>
                </div>
            </section>
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </div>
    )
}


export default Home;