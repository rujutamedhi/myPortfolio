import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Project from './components/project'
import Contact from './components/contact'


const App=()=>{
const[name,setname]=useState("Rujuta Medhi")
    return(
        <>
        <Navbar setname={setname} />
        <div className="container">
            <Home name={name}/>
            <Experience/>
            <Skills/>
            <Project/>
            <Contact/>
        </div>
        </>
)
}
export default App