import React from 'react';
import python from '../images/tech/icons8-python-48.png'
import django from '../images/tech/icons8-django-48.png'
import js from '../images/tech/icons8-javascript-48.png'
import react from '../images/tech/icons8-react-40.png'
import jq from '../images/tech/icons8-jquery-48.png'
import b5 from '../images/tech/icons8-bootstrap-48.png'
import post from '../images/tech/icons8-postgresql-48.png'
import html from '../images/tech/icons8-html-5-48.png'
import css from '../images/tech/icons8-css3-48.png'
import myimage from '../images/myimage2.png'
const AboutMe = () => {
    return (
        <>
        <div id='about' className="d-flex text-center ">
                           <div className="col aboutme-heading h1 mt-5">About Me</div>
        </div>
          <div className="container aboutme-container mt-5">
               <div className="row profile-row text-center justify-content-center">
                  <div className="col-md-5 mt-5 align-self-md-center text-center">
                      <img src={myimage} className='my-image' alt="" />
                      <div className='social mt-3 d-flex justify-content-center'>
            <div><a href=""><i className="fa-brands linkedin fa-linkedin-in fa-2x p-2 w-100"></i></a></div>
            <div><a href=""><i className='fa-brands github fa-github fa-2x p-2 w-100'></i></a></div>
            <div><a href=""><i className='fa-brands instagram fa-instagram fa-2x p-2 w-100'></i></a></div>
            <div><a href=""><i className='fa-brands twitter fa-twitter fa-2x p-2 w-100'></i></a></div>
        </div>
                  </div>
                  <div className="col-md-5 align-self-md-center ">
                    <div className="row mt-5 ">
                       <div className="col h1 profile-name-heading">Hello ,<span>I'M</span> <span >Yogesh </span>Choudhari</div>
                    </div>
                    <div className="row">
                       <div className="col h4"><span className=''>A</span> Full Stack Python Web Developer</div>
                    </div>
                    
                    <div className="row">
                        <p><span className='h6'></span>I have Experince In Web development of 1 Year. I can both design and develope Front-end and Back-end</p>
                    </div>
                    <div className='row '>
                         <div className="col"><span className='h6'></span>  <span className='profile-tech'><img src={html} alt="" /><img src={css} alt="" />  <img src={python} alt="" /><img src={js} alt="" /> <img src={react} alt="" /> 
                         <img src={jq} alt="" /><img src={b5} alt="" /> <img src={post} alt="" /><img src={django} alt="" /></span>
                         </div>
                    </div>
                    
                    
                 </div>
               </div>
          </div>
        </>
    )
}

export default AboutMe;