import "./Skills.scss"

//importing svg's
import {ReactComponent as React} from "../../assets/icons/react.svg";
import {ReactComponent as Scss} from "../../assets/icons/scss.svg";
import {ReactComponent as Node} from "../../assets/icons/node.svg";
import {ReactComponent as CsharpNET} from "../../assets/icons/csharp.svg";
import {ReactComponent as Dotnet} from "../../assets/icons/dotnet.svg";
import {ReactComponent as GitIcon} from "../../assets/icons/git-icon.svg";
import {ReactComponent as Windows} from "../../assets/icons/windows-icon.svg";
import { useReducer } from "react";

const initialState = {display: "none"}

function reducer(state, action){
    switch(action.type){
        case 'nodejs':
            return {display: "nodejs"}

        case 'sass':
            return {display: "sass"}

        case 'csharp':
            return{display: "csharp"}
        
        case 'git':
            return{display: "git"}
        
        case 'windows':
            return{display: "windows"}
        
        case 'react':
            return{display: "react"}

        default:
            return {display: "none"}
    }
}

function Skills(){

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="skills-main-div" id="SKILLS">
            <div className="skills-title">
                <h1>Tech i'm using</h1>
            </div>
            <div className="skills-icons">
                <React id={state.display === 'react' ? "skills-icons-color" : "skills-icons"} onClick={()=>dispatch({type: "react"})}/>
                <Scss id={state.display === 'sass' ? "skills-icons-color" : "skills-icons"} onClick={()=>dispatch({type: "sass"})}/>
                <Node id={state.display === 'nodejs' ? "skills-icons-color" : "skills-icons"} onClick={()=>dispatch({type: "nodejs"})} />
                <CsharpNET id={state.display === 'csharp' ? "skills-icons-color" : "skills-icons"} onClick={()=>dispatch({type: "csharp"})} />
                <Dotnet id={state.display === 'csharp' ? "skills-icons-color" : "skills-icons"} onClick={()=>dispatch({type: "csharp"})}/>
                <Windows id={state.display === 'windows' ? "skills-icons-color" : "skills-icons"} onClick={()=>dispatch({type: "windows"})}/>
                <GitIcon id={state.display === 'git' ? "skills-icons-color" : "skills-icons"} onClick={()=>dispatch({type: "git"})}/>
            </div>
            <div className="skills-dashboard">
                {(()=>{
                    switch(state.display){
                        case("nodejs"):
                            return(<NodeJS />)
                        
                        case("sass"):
                            return(<Sass />)

                        case("csharp"):
                            return(<Csharp />)

                        case("git"):
                            return(<Git />)

                        case("windows"):
                            return(<System />)
                        
                        case("react"):
                            return(<ReactJS />)

                        default:
                            return(<HomeMessage />)
                    }

                })()}
            </div>  
        </div>
    )
}

//--------------------------------------------------
//specific skills components

const HomeMessage = () => {
    return(
        <div className="skills-dashboard-items">
            <div>
                <h1>Hello sir !</h1>
            </div>
            <div>
                <p>Select an icon above to display my skills in a specific technology</p>
            </div>
        </div>
    )
}

const NodeJS = () => {
    return(
        <div className="skills-dashboard-items">
            <div>
                <h1>NodeJS</h1>
            </div>
            <div>
            <p>En création ... ⚙️🛠 </p>
            </div>
        </div>
    )
}

const ReactJS = () => {
    return(
        <div className="skills-dashboard-items">
            <div>
                <h1>React</h1>
            </div>
            <div>
                <p>En création ... ⚙️🛠 </p>
            </div>
        </div>
    )
}

const Sass = () => {
    return(
        <div className="skills-dashboard-items">
            <div>
                <h1>Sass</h1>
            </div>
            <div>
            <p>En création ... ⚙️🛠 </p>
            </div>
        </div>
    )
}

const Csharp = () => {
    return(
        <div className="skills-dashboard-items">
            <div>
                <h1>C#</h1>
            </div>
            <div>
            <p>En création ... ⚙️🛠 </p>
            </div>
        </div>
    )
}

const Git = () => {
    return(
        <div className="skills-dashboard-items">
            <div>
                <h1>Git</h1>
            </div>
            <div>
            <p>En création ... ⚙️🛠 </p>
            </div>
        </div>
    )
}

const System = () => {
    return(
        <div className="skills-dashboard-items">
            <div>
                <h1>System & Kernel</h1>
            </div>
            <div>
            <p>En création ... ⚙️🛠 </p>
            </div>
        </div>
    )
}


export default Skills;