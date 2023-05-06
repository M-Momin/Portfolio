import './App.scss'

import {lazy, Suspense} from "react"

//Portfolio components
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';

const About = lazy(()=>import("../components/About/About"));
const Footer = lazy(()=>import("../components/Footer/Footer"));
const Project = lazy(()=>import("../components/Projects/Projects"));
const Skills = lazy(()=>import("../components/Skills/Skills"));

function App(){
    return(
        <>
            <Navbar />
            <Home />
            <Suspense fallback={<Loading />}>
                <About />
                <Project />
                <Skills />
                <Footer />
            </Suspense>
        </>
    )
}

const Loading = () => {
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

export default App;