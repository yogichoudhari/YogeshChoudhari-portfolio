import React from "react";
// import shophub from "../images/shophub.png;
import Project from './Project'
import webData from './webData.js'

const Projects = () => {
  console.log(webData)
  return (
    <>
     
     <div id="project" className="container  mt-5 ">
        <div className="row mb-5 text-center">
          <div className="col">
            <h1 className='headline d-inline'>Personal Projects</h1>
          </div>
        </div>

        <div className="row project-row justify-content-around  mb-md-5 mb-3">
        {webData.map((ele)=>{
         
         return <Project website={ele.website} link={ele.link} image={ele.image} technologies={ele.technologies} discription={ele.discription} ></Project>
       })}
          </div>
          
        </div>
        
    </>
  );
};
export default Projects;
