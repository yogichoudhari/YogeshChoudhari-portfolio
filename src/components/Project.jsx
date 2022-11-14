import React from 'react';

const Project = (props) => {
    return (
        <>
      <div className="col-md-4 col-sm-6  web-image-row mb-5 image-div ">
            <a href={props.link}>
              <img src={props.image} className="img-fluid" alt="mywebsiteimage" />
              
            </a>
            <div className=" title mt-5">
              <div className="col">
                <span className="h6">Website</span> -
               {props.website}
              </div>
            </div>
            <div className="row tech">
              <div className="col">
                <span className="h6">Technologies used</span>-
                 
                  {props.technologies.map((img)=>{
                      
                    return <img src={img} alt='tech' />
                     
                  })}
              </div>
            </div>
            <div className="row desc">
              <p>
                <span className="h6">Discription</span>-{props.discription}
              </p>
            </div>
            
          </div>
            
        </>
    )
}

export default Project;

