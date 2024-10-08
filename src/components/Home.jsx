import React, { useEffect } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from "./data/hero.json"


const Home = ({name}) => {
  
  return (
    <>
    <div id='home' className="container home">
        <div className="left" 
        
        >
            <h1 >
             I am {name} and I am a developer
            </h1>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right"
        
        >
            <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
