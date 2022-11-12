import React from 'react';
import shophub from '../images/shophub.png'
import python from '../images/tech/icons8-python-48.png'
import js from '../images/tech/icons8-javascript-48.png'
import jq from '../images/tech/icons8-jquery-48.png'
import b5 from '../images/tech/icons8-bootstrap-48.png'
import post from '../images/tech/icons8-postgresql-48.png'
import html from '../images/tech/icons8-html-5-48.png'
import css from '../images/tech/icons8-css3-48.png'

const Projects = () => {
    return(
        <>
         <div id='project' className="container  mt-5 ">
             <div className="row mb-5 text-center">
                 <div className="col">
                     <h1>Personal Projects</h1>
                 </div>
             </div>
             
             <div className="row project-row justify-content-center mb-md-5 mb-3" >
                 <div className="col-md-4 col-12 image-div align-self-md-center"><a href="http://myshophub.herokuapp.com/"><img src={shophub} className='img-fluid' alt="mywebsiteimage" /></a></div>
                 <div className="col-md-8  col-12 web-info">
                    <div className="row title mt-5">
                       <div className="col"><span className='h6'>Website Name</span> - myshophub.herokuapp.com</div>
                    </div>
                    <div className='row tech'>
                         <div className="col"><span className='h6'>Technologies used</span> - <img src={html} alt="" />HTML,<img src={css} alt="" />CSS3,  <img src={python} alt="" />Python,<img src={js} alt="" />Javascript, 
                         <img src={jq} alt="" />Jquery,Ajax <img src={b5} alt="" />Bootstrap5, <img src={post} alt="" />Postgresql Database 
                         </div>
                    </div>
                    <div className="row desc">
                        <p><span className='h6'>Discription</span> - Its a small Prototype of a E-COMMERCE Website.
                          User Authentication while Signup using email verification , Change Password , Reset Password using email,Product search bar , Category wise product filteration,Cart.. in cart i used Ajax for dynamically changing data without refreshing the page</p>
                    </div>
                    <div className="row justify-content-end ">
                    <a href="http://myshophub.herokuapp.com/"><button className=' web-btn w-25'>Click to visit</button></a>
                    </div>
                 </div>
             </div>
             
            
         </div>
        </>
    )
}
export default Projects;