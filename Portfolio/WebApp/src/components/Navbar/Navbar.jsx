import './Navbar.scss'

//importing svg's
import {ReactComponent as CodeIcon} from '../../assets/icons/code-icon.svg';
import {ReactComponent as GitIcon } from '../../assets/icons/github-icon.svg';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook-icon.svg';
import {ReactComponent as LangIcon} from "../../assets/icons/lang-icon.svg";

function Navbar(){
    return(
        <div className='navbar-main-div'>
            <div className='navbar-main-title'>
                <span><CodeIcon id="navbar-icon"/></span>
                <h1>Mon Portfolio</h1>
            </div>
            <div className='navbar-items'>
                <div className='nav-links'>
                    <a href='#HOME'>Home</a>
                    <a href='#ABOUT'>A propos</a>
                    <a href='#PROJECT'>Activités</a>
                    <a href='#SKILLS'>Compétences</a>
                </div>
                <div className='vertical-line'></div>
                <div className='lang-div'>
                    <LangIcon id="lang-icon" />
                    <LangDropDown />
                </div>
                <div className='vertical-line'></div>
                <div className='theme-div'>
                    <p>toggle</p>
                </div>
                <div className='vertical-line'></div>
                <div className='icons-div'>
                    <a href='https://github.com/rvs-png'><GitIcon id="link-icons" /></a>
                    <a href='https://www.facebook.com/maxime.momin/'><FacebookIcon id="link-icons" /></a>
                </div>
            </div>
        </div>
    )
}

const LangDropDown = () => {
    return(
        <div className='lang-dropdown'>
            <p>French</p>
            <p>Spanish</p>
        </div>
    )
}

export default Navbar;