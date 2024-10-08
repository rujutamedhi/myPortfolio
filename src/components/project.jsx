import React from 'react'
import project from './data/projects.json'
const Project = () => {
  return (
    <>
    <div id='project' className="container project my-3">
<h1 style={{color:"black"}}>PROJECTS</h1>
<div className="row d-flex justify-content-center align-items-center">
{project.map((data)=>(
  <>
  <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
  
  >
  <div className="card" style={{width: "18rem",border:'1px solid yellow',boxShadow:'5px 5px 10px 10px rgba(101,175,10,0.5)',backgroundColor:"rgb(40,47,97)",color:"white"}}
  
  >
    <div className="img d-flex justify-content-center align-items-center p-3">
  <img src={data.imageSrc} className="card-img-top" alt="..." style={{width:'250px',height:'200px',border:'2px solid yellow',borderRadius:'10px'}}/>
  </div>
  <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
    <a href={data.source} className="btn btn-warning">Code</a>
  </div>
</div>
  </div>
  </>
))}
</div>
    </div>
    </>
  )
}

export default Project
