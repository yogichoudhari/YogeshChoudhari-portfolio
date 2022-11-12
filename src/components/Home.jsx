import React from "react";
import Typewriter from 'typewriter-effect'
import image from '../images/dev_image.png'

const Home = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className=" flex-wrap-reverse row justify-content-between home-section">

                    <div className="col-md-5 d-flex justify-content-center ">
                        <div className="row intro-container text-center align-self-center  align-content-md-center ">
                            <div className="intro-section col-12 ">
                            <span className=" intro-text p-3"><span>H</span>i <span>T</span>here...</span>
                            <div className="type-writer">
                                <Typewriter 
                                options={{
                                    loop:true
                                }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString(`I'm Yogesh Choudhari`)
                                            .pauseFor(2500)
                                            .deleteAll()
                                             .typeString(`I'm A Full Stack Python Developer`)
                                            .start();
                                    }}
                                />
                                </div>
                                <div className="">
                                 <a href="https://docs.google.com/document/d/e/2PACX-1vS5V1grajMdQBJuM_2efkxzG3qy2GRi_o3DHOj2gWjEDoMRX-h46JIhUHbozXmqxw/pub"><button className="btn">Download CV </button></a> 
                            </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="col-md-5 ">
                        <div className="row intro-image-container align-content-center text-center ">
                            <div><img  src={image} className='image-fluid' alt="web" /></div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};
export default Home;

// 
// <br />
// And<span className="intro"> A Full Stack Developer</span>