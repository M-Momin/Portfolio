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
                <p>Bonjour, moi c'est <span id="colored-text">Maxime </span>, un passionné <span id="colored-text">d'électronique</span> et <span id="colored-text">du vaste monde de l'informatique</span>. Je suis pour l'instant étudiant en <span id="colored-text">Technologie de l'Informatique</span> à l'<span id="colored-text">Ephec</span>. J'ai beaucoup d'intérêt pour<span id="colored-text"> l'implémentation</span> de petites <span id="colored-text">applications/scripts </span> en tout genre. J'utilise énormément le langage <span id="colored-text"> Python</span> et ses multiples librairies pour mes projets personnels. J'ai également un énorme <span id="colored-text">intérêt</span> pour le <span id="colored-text">traitement du son et la sonorisation.</span></p>
                <CodingSVG id="coding-svg" />
            </div>
        </div>
    )
}

export default About;