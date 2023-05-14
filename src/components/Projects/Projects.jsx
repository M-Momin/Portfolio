import "./Projects.scss"
import { useState } from 'react';
import Popup from './Popup';
import Modal from 'react-modal';

//images
import YouConvertPlay from "../../assets/images/YouConvertPlay.png";
import Maintenance from "../../assets/images/maintenance.png";
import KameHouse from "../../assets/images/KameHouse.png";
import Next from "../../assets/images/next.png";
import Progra from "../../assets/images/train-progra.png";
import Music from "../../assets/images/music.png";
import ElecTool from "../../assets/images/electrician_tool.jpg";
import Annonciation from "../../assets/images/annociation.png";
import Cesam from "../../assets/images/cesam.png";
import Hackaton from "../../assets/images/hackaton.png";
import Scout from "../../assets/images/Scout.png";
import FlStudio from "../../assets/images/FlStudio.png";


//importing SVG's
import {ReactComponent as React} from "../../assets/icons/react.svg";
import {ReactComponent as Python} from "../../assets/icons/python.svg";
import {ReactComponent as Setting} from "../../assets/icons/setting.svg";
import {ReactComponent as Computer} from "../../assets/icons/computer.svg";
import {ReactComponent as Kids} from "../../assets/icons/kids.svg";
import {ReactComponent as Scratch} from "../../assets/icons/scratch.svg";
import Bottom from "../../assets/Images/bottom.png";
import Close from "../../assets/icons/close.svg";

function Projects(){
    const [showTable, setShowTable] = useState(false); // état local pour afficher ou cacher le tableau
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        myTitle: "",
        myDescription: "",
        myImage: "",
        myHours: "",
      });
      

    const handleButtonClick = () => {
      setShowTable(!showTable); // inverse l'état actuel lorsqu'on clique sur le bouton
    }
    const handleRowClick = (rowData) => {
        setModalContent({
          myTitle: rowData.title,
          myDescription: rowData.description,
          myImage: rowData.image,
          myHours: rowData.hours,
        });
        openModal();
      };
    
      
    const openModal = () => {
    setModalIsOpen(true);
    };
    
    const closeModal = () => {
    setModalIsOpen(false);
    };
    return(
        <div className="projects-main-div" id="PROJECT">
            <div className="projects-title">
                <h1>Mes activités extrascolaires</h1>
            </div>
            <div className="projects-body">
                <div className="projects-body-items">
                    <img src={Music} alt="Music-Boy"></img>
                    <div className="items-description">
                        <h2>YouConvertPlay</h2>
                        <p>Programme Python de bureau permettant le téléchargement de playlist Youtube en local.</p>
                        <h3 className="technos">Thèmes</h3>
                        <div>
                            <Python id="dev-icons"/>
                        </div>
                    </div>
                </div>
                <div className="projects-body-items">
                    <img src={Maintenance} alt="maintenance"></img>
                    <div className="items-description">
                        <h2>Configuration PC</h2>
                        <p>Dans le cadre d'un engagemement personnel, réalisation de la maintenance du parc informatique d'une école.</p>
                        <h3 className="technos">Thèmes</h3>
                        <div>
                            <Computer id="dev-icons"/>
                            <Setting id="dev-icons"/>
                        </div>
                    </div>
                </div>
                <div className="projects-body-items">
                    <img src={Progra} alt="Logiscool"></img>
                    <div className="items-description">
                        <h2>Moniteur d'informatique</h2>
                        <p>J'ai pu être moniteur d'informatique/codage Cesam Nature en collaboration avec Logiscool.</p>
                        <h3 className="technos">Thèmes</h3>
                        <div>
                            <Kids id="dev-icons"/>
                            <Scratch id="dev-icons"/>
                        </div>
                    </div>
                </div>         
            </div>

            <div className="button-container">
                    <button className="styled-button" onClick={handleButtonClick}>Voir plus<img src={Bottom} alt="Next"></img></button>
            </div>   
            {showTable && (
                <div className="TableContainer">
                    <p className="indice"><i> Les lignes sont cliquables !</i> 😉</p>

                    <table className="styled-table">
                        <thead>
                        <tr >
                            <th>Numéro</th>
                            <th>Titre</th>
                            <th>Thèmes</th>
                            <th>Heures prestées</th>
                            <th>Heures à valider</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr onClick={() => handleRowClick({
                            title: "YouConvertPlay 🎧💻",
                            description: "Qui n'a jamais rêvé de pouvoir télécharger ses musiques préférées sur Youtube. Vous prenez du temps à faire des playlists mais malheureusement pas de connexion dans la voiture pour partir en vacances. YouConvertPlay vous permet des télécharger facilement et en quelques cliques toutes vos playlists. Cette application est développée en python et est donc multiplateforme.\n" +
                                           "J'ai utilisé l'éditeur de texte SublimeText pour élaborer cette petite application de bureau. J'ai également utilisé les librairies PyTube et WXPython pour le coté graphique.\n" +
                                           "YouConvertPlay propose plusieurs fonctionnalités comme la gestion des enregistrements des playlists, le choix du dossier de téléchargement et d'autres petites options fortes utiles à l'utilisateur.\n" +
                                           " Enjoy !",
                            image: YouConvertPlay,
                            hours: "16 heures",
                            })}>
                            <td>1</td>
                            <td>YouConvertPlay</td>
                            <td>Développement, Python, Musique, PyTube</td>
                            <td>16</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Maintenance d'un parc informatique scolaire ⚙️💻🏫",
                            description: "Dans le cadre d'un engagement personnel, j'ai réalisé la décompression/maintenance et configuration d'un bon nombre d'ordinateurs du parc informatique de L'institut de l'Annonciation, école primaire et maternelle située à Schaerbeek. J'ai donc dû, avec la personne attitrée IT de l'école, m'occuper des mises à jours, d'installations de logiciels divers, de la mise en place de la sécurité et des différentes créations de sessions utilisateurs et administrateurs.",
                            image: Annonciation,
                            hours: "20 heures",
                            })}>
                            <td>2</td>
                            <td>Maintenance PC</td>
                            <td>Décompression/Maintenance, Parc informatique</td>
                            <td>20</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Moniteur d'informatique pour les plus jeunes 💻👨‍🏫👶",
                            description: "Description 1",
                            image: Cesam,
                            hours: "80 heures",
                            })}>
                            <td>3</td>
                            <td>Moniteur d'informatique</td>
                            <td>Enseignement, Développement, Scratch, CesamNature</td>
                            <td>80</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Hackaton Développement Durable 2022 💻🏓",
                            description: "Description 1",
                            image: Hackaton,
                            hours: "20 heures",
                            })}>
                            <td>4</td>
                            <td>Hackathon Ephec</td>
                            <td>Hackathon Développement Durable 2022</td>
                            <td>20</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Mouvement de jeunesse ",
                            description: "Description 1",
                            image: Scout,
                            hours: "∞",
                            })}>
                            <td>5</td>
                            <td>Mouvement de jeunesse</td>
                            <td>Intendances</td>
                            <td>∞</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Réparations/Reconditionnements d'appareils de sonorisation 🔧🔊",
                            description: "Description 1",
                            image: ElecTool,
                            hours: "15 heures",
                            })}>
                            <td>6</td>
                            <td>Reconditionnement Sonorisation</td>
                            <td>Réparations/Reconditionnements d'appareils de sonorisation</td>
                            <td>15</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Composition/Traitement de son 🎼🔊",
                            description: "Description 1",
                            image: FlStudio,
                            hours: "10 heures",
                            })}>
                            <td>7</td>
                            <td>Composition/Traitement de son</td>
                            <td>Composition de contenue musical, traitement vocale et mixage</td>
                            <td>??</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Démontage et réassemblement de composants infromatiques",
                            description: "Description 1",
                            image: ElecTool,
                            hours: "8 heures",
                            })}>
                            <td>8</td>
                            <td>Démontage composants informatique</td>
                            <td>Démontage et réassemblement de composants infromatiques</td>
                            <td>8</td>
                            <td>8</td>
                        </tr>
                        </tbody>
                    </table>
                    <Modal className="custom-modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <h2>{modalContent.myTitle}</h2>
                        <p className="description">{modalContent.myDescription}</p>
                        <img src={modalContent.myImage} alt="popup image" />
                        <p className="hours">⏳ : {modalContent.myHours}</p>
                        <button className="styled-button" onClick={closeModal}> X</button>
                    </Modal>


                    </div>
            )}
            
        </div>
        
    )
}

export default Projects;