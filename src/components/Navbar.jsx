import React from 'react'
import $ from 'jquery';




const NavBar = () => {
  $('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });
    return (
        <>
         <div className="container-fluid bg-transparent sticky-top">
             <div className="row col ">
             <nav className="navbar navbar-bg  navbar-expand-lg  text-light">
  <div className="container-fluid ">
    <p className="navbar-brand text-light fs-3 heading" ><span  className='p-2 h-span-1 '>Web</span><span>Dev</span></p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""><i className='fa fa-list text-light'></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  className="nav-link text-light " href='#aboutme'   aria-current="page" ><span className='links' > <i className='fa fa-home'></i> Home</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#project"> <span className='links' > <i className='fa fa-setting'></i> Projects</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href='#about' ><span className='links' >About Me</span></a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
             </div>
         </div>
        </>
    )
}
export default NavBar