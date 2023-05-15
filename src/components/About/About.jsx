import "./About.scss"

//importing svg
import {ReactComponent as CodingSVG} from "../../assets/images/coding.svg";

function About(){
    return(
        <div className="about-main-div" id="ABOUT">
            <div className="about-title">
                <h1>À propos de moi</h1>
            </div>
            <div className="about-body">
                <p>Bonjour, <span id="colored-text">moi c'est Maxime </span>, un passionné <span id="colored-text">d'électronique</span> et <span id="colored-text">du vaste monde de l'informatique</span>. Je suis pour l'instant étudiant <span id="colored-text">en technologie de l'informatique</span>. J'ai d'intérêt pour<span id="colored-text">les petits projets de programmation </span> avec <span id="colored-text">Python & Android Jetpack Compose</span>. J'utilise énormément<span id="colored-text"> Python et ses multiples librairies</span> pour mes projets personnels. J'ai également <span id="colored-text">un énorme intérêt</span> pour le <span id="colored-text">traitement du son et la sonorisation.</span></p>
                <CodingSVG id="coding-svg" />
            </div>
        </div>
    )
}

export default About;