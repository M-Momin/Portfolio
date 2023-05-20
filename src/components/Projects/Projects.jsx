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
import Baffles from "../../assets/images/baffles.png";
import Hardware from "../../assets/images/hardware.png";


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
        const descriptionWithLineBreaks = rowData.description.replaceAll("\n", "<br>");
        const descriptionWithLink = descriptionWithLineBreaks.replace(
            /https?:\/\/[^\s]+/g,
            (url) => `<a href="${url}" target="_blank">${url}</a>`
          );
      
        setModalContent({
          myTitle: rowData.title,
          myDescription: descriptionWithLink,
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
                        <h2>YouConvertPlay 🎧💻</h2>
                        <p>Création d'un programme Python de bureau permettant le téléchargement de playlist Youtube en local.</p>
                        <h3 className="technos">Thèmes</h3>
                        <div>
                            <Python id="dev-icons"/>
                        </div>
                    </div>
                </div>
                <div className="projects-body-items">
                    <img src={Maintenance} alt="maintenance"></img>
                    <div className="items-description">
                        <h2>Maintenance d'un parc informatique scolaire ⚙️💻🏫</h2>
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
                        <h2>Moniteur d'informatique 💻👨‍🏫👶</h2>
                        <p>J'ai été moniteur d'informatique/codage Cesam Nature en collaboration avec Logiscool pour les plus jeunes.</p>
                        <h3 className="technos">Thèmes</h3>
                        <div>
                            <Kids id="dev-icons"/>
                            <Scratch id="dev-icons"/>
                        </div>
                    </div>
                </div>         
            </div>

            <div className="button-container">
                    <button className="styled-button" onClick={handleButtonClick}>Voir mon tableau !<img src={Bottom} alt="Next"></img></button>
            </div>   
            {showTable && (
                <div className="TableContainer">
                    <p className="indice"><i> Les lignes sont cliquables !</i> 😉</p>

                    <table className="styled-table">
                        <thead>
                        <tr >
                            <th>Numéro</th>
                            <th>Titre</th>
                            <th></th>
                            <th>Thèmes</th>
                            <th>Heures prestées</th>
                            <th>Heures à valider</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr onClick={() => handleRowClick({
                            title: "YouConvertPlay 🎧💻",
                            description: "Qui n'a jamais rêvé de pouvoir télécharger ses musiques préférées depuis YouTube ? Vous passez du temps à créer des playlists, mais malheureusement, lorsque vous partez en vacances en voiture, il n'y a pas de connexion. YouConvertPlay vous permet de télécharger facilement et en quelques clics toutes vos playlists. \n\n"+
                                        "J'ai entièrement développé cette application en utilisant le langage Python. Plusieurs bibliothèques m'ont été utiles, telles que PyTube et WXPython. YouConvertPlay offre plusieurs fonctionnalités, notamment la gestion de l'enregistrement des playlists, le choix du dossier de téléchargement, un apperçu de téléchargement en temps réel, ainsi que d'autres options pratiques pour les utilisateurs.\n\n" +
                                        "L'implémentation et la gestion des erreurs m'ont demandé du temps et beaucoup d'efforts, mais j'ai finalement obtenu un résultat satisfaisant avec une interface graphique claire pour l'utilisateur.\n\n" + 
                                        "J'ai créé un dépôt contenant l'application sur GitHub. Voici le lien : \n\n 🔗https://github.com/M-Momin/YouConvert",
                            image: YouConvertPlay,
                            hours: "16 heures",
                            })}>
                            <td>1</td>
                            <td>YouConvertPlay</td>
                            <td>🎧💻</td>
                            <td>Développement, Python, Musique, PyTube</td>
                            <td>16</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Maintenance d'un parc informatique scolaire ⚙️💻🏫",
                            description: "Dans le cadre d'une initiative personnelle, j'ai effectué la décompression, la maintenance et la configuration d'un grand nombre d'ordinateurs faisant partie du parc informatique de l'Institut de l'Annonciation, une école primaire et maternelle située à Schaerbeek. \n\nEn collaboration avec le responsable informatique de l'école, j'ai été chargé de mettre à jour les systèmes, d'installer divers logiciels, de mettre en place des mesures de sécurité et de créer des sessions utilisateurs et administrateurs.",
                            image: Annonciation,
                            hours: "20 heures",
                            })}>
                            <td>2</td>
                            <td>Maintenance d'un parc informatique scolaire</td>
                            <td>⚙️💻🏫</td>
                            <td>Décompression/Maintenance, Parc informatique</td>
                            <td>20</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Moniteur d'informatique 💻👨‍🏫👶",
                            description: "Pendant mon emploi chez Logiscool (une école de programmation pour enfants), j'ai eu l'opportunité de donner plusieurs formations en collaboration avec Cesam Nature à des enfants âgés de 7 à 12 ans. \n\nJ'ai enseigné aux enfants les bases de l'informatique en utilisant le langage Scratch. De plus, j'ai introduit des notions de sécurité et de prudence en ligne, ainsi que les fondements de la cryptographie (comme le code Morse et le chiffrement par décalage) à travers des énigmes. Chaque formation a duré une semaine et j'ai été responsable d'un groupe d'environ dix élèves, en collaboration avec un collègue. \n\nCes formations ont été très enrichissantes et j'espère avoir pu transmettre de nombreuses connaissances à mes élèves.",
                            image: Cesam,
                            hours: "80 heures",
                            })}>
                            <td>3</td>
                            <td>Moniteur d'informatique</td>
                            <td>💻👨‍🏫👶</td>
                            <td>Enseignement, Développement, Scratch, CesamNature</td>
                            <td>80</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Hackaton Développement Durable 2022 💻🏓",
                            description: "J'ai eu l'opportunité de participer à l'édition 2022 du Weekend Hackathon organisé par l'Ephec, axé sur le développement durable. \n\nCe week-end a été à la fois enrichissant sur le plan humain et en termes d'apprentissage. Notre objectif était de collaborer avec d'autres étudiants pour proposer une application web en lien avec le développement durable. Il fallait trouver une idée et la développer dans un laps de temps très court. J'ai pu faire de nouvelles connaissances et, avec un coéquipier, remporter le tournoi de ping-pong organisé. \n\nEn résumé, ce week-end a été fantastique et nous avons réussi à créer une petite solution très intéressante.",
                            image: Hackaton,
                            hours: "20 heures",
                            })}>
                            <td>4</td>
                            <td>Hackaton Développement Durable 2022</td>
                            <td>💻🏓</td>
                            <td>Développement durable, Ephec, Collaboration, Implémentation</td>
                            <td>20</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Mouvements de jeunesse 🏕️🌲",
                            description: "Pendant mes moments de libre, je suis souvent disponible pour apporter mon aide à l'unité de ma sœur, où elle occupe actuellement le poste de chef PI dans une unité de Waterloo. \n\nJ'ai participé, à plusieurs reprises, aux camps baladins de ma sœur en tant qu'intendant, ayant pour mission principale de veiller à la satisfaction des estomacs des jeunes baladins. J'ai également contribué à l'organisation de diverses activités et joué un rôle actif dans le bon déroulement global du camp.",
                            image: Scout,
                            hours: "Infini ∞",
                            })}>
                            <td>5</td>
                            <td>Mouvements de jeunesse</td>
                            <td>🏕️🌲</td>
                            <td>Intendances</td>
                            <td>Infini ∞</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Réparations/Reconditionnements d'appareils de sonorisation 🔧🔊",
                            description: "En tant que passionné de sonorisation, je consacre une grande partie de mes week-ends à modifier mon système d'enceintes à la recherche d'une acoustique parfaite. \n\nJe suis également constamment à la recherche de nouveaux équipements d'occasion. Parfois, je m'amuse à démonter des appareils endommagés ou défectueux, que ce soit des enceintes, des amplificateurs, des égaliseurs ou autres, afin de diagnostiquer le problème et voir si je peux les réparer par moi-même. \n\nJ'ai déjà réalisé la réparation de deux enceintes 3 voies dont les filtres passe-bas et passe-bande étaient défectueux. J'ai donc remplacé et ressoudé ces composants aux différentes membranes des haut-parleurs. \n\nJ'ai également effectué quelques modifications sur un amplificateur US-Blaster un peu ancien qui avait un problème de surchauffe. Le ventilateur était défectueux, alors j'ai récupéré un vieux ventilateur d'une ancienne alimentation d'ordinateur cassée. J'ai réussi à le ressouder sur la carte de l'amplificateur et le tour était joué. \n\nPar ailleurs, j'ai construit un caisson de basse actif en collaboration avec un ami. Ce caisson est équipé d'un woofer de 15 pouces et grâce à son ampli de classe D, il peut descendre jusqu'à 30 Hz avec un rendement proche de 90%. J'ai réalisé le boîtier en bois avec l'aide de mon ami, en le divisant en deux parties pour protéger l'ampli situé à l'arrière de l'enceinte.",
                            image: Baffles,
                            hours: "15 heures",
                            })}>
                            <td>6</td>
                            <td>Réparation/Reconditionnement d'appareils de sonorisation</td>
                            <td>🔧🔊</td>
                            <td>Sonorisation, Électronique</td>
                            <td>15</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Composition/Traitement de son 🎼🎵🎚️",
                            description: "Outre la sonorisation, j'ai une passion pour l'exploration des fréquences. Depuis plusieurs années, je crée des compositions musicales en utilisant des traitements de voix et une variété de sons. \n\nJ'utilise Fl Studio, un logiciel de production musicale, qui me permet de travailler avec différents VST, des plugins de traitement sonore. \n\nHabituellement, je pars d'un son neutre que je modifie en utilisant diverses options. Par exemple, je peux ajuster les harmoniques pour modifier le spectre audio en altérant les différentes fréquences présentes dans le son. Une fois que j'ai trouvé le réglage sonore qui me plaît, je passe à la composition des notes, puis au mixage. Le mixage consiste à appliquer une série d'effets sur notre échantillon sonore, tels que des filtres passe-bande, de la réverbération, des échos, des compresseurs numériques, et bien d'autres. J'enregistre également des amis qui souhaitent se lancer dans le chant. \n\nJ'ai une chaîne YouTube où je partage certaines de mes réalisations. Si vous êtes curieux, voici le lien vers ma chaîne :\n 🔗 https://www.youtube.com/@revengers3376 \n\nEn plus de la composition, je réalise également des retouches sonores. Il m'arrive parfois de devoir identifier des fréquences dans une vidéo et les supprimer, ou simplement retravailler un enregistrement audio pour qu'il sonne plus juste.",
                            image: FlStudio,
                            hours: "Infini ∞",
                            })}>
                            <td>7</td>
                            <td>Composition/Traitement de son</td>
                            <td>🎼🎵🎚️</td>
                            <td>Composition musicale, Traitement de son, Logiciel</td>
                            <td>Infini ∞</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => handleRowClick({
                            title: "Démontage et réassemblage de composants informatiques 🔧💻",
                            description: "Récemment, j'ai découvert chez moi des vestiges de tours d'ordinateurs, comprenant des cartes mères, des alimentations et des disques durs. \n\nMon frère et moi avons pris plaisir à les démonter, les tester et récupérer ce qui était encore fonctionnel, que ce soit pour assembler un nouvel ordinateur ou simplement pour conserver des pièces utiles comme des ventilateurs, des vis et des aimants. Nous avons réussi à construire un PC peu puissant et surtout très lourd en raison des vieux composants que nous avons utilisés. \n\nBien que nous ne l'utilisions finalement pas, cette expérience de construction a été très instructive, car elle m'a permis de mieux comprendre le fonctionnement matériel d'un ordinateur. De plus, c'était très amusant de manipuler de tels composants. \n\nJ'ai également démonté de nombreux disques durs HDD défectueux pour observer leur fonctionnement de plus près et récupérer leurs aimants, qui sont assez puissants.",
                            image: Hardware,
                            hours: "8 heures",
                            })}>
                            <td>8</td>
                            <td>Démontage et réassemblage de composants informatiques</td>
                            <td>🔧💻</td>
                            <td>Hardware, Électronique</td>
                            <td>8</td>
                            <td>8</td>
                        </tr>
                        </tbody>
                    </table>
                    <Modal className="custom-modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <h2>{modalContent.myTitle}</h2>
                        <p className="description" dangerouslySetInnerHTML={{ __html: modalContent.myDescription }}></p>
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