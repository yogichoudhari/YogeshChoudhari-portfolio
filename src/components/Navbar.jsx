import React from 'react'





const NavBar = () => {

  return (
    <>
      <div className="container-fluid bg-transparent sticky-top">
        <div className="row col ">
          <nav className="navbar navbar-bg  navbar-expand-lg  text-light">
            <div className="container-fluid ">
              <p className="navbar-brand text-light fs-3 heading" ><span className='p-2 h-span-1 '>Web</span><span>Dev</span></p>
              <ul className="navbar-nav d-flex flex-row  ms-auto mb-2 mb-lg-0">

                <li className="nav-item me-1 p-1 ">
                  <a className="nav-link text-light" href="#project"> <span className='links' > <i className='fa fa-setting'></i> Projects</span></a>
                </li>
                <li className="nav-item p-1">
                  <a className="nav-link text-light" href='#about' ><span className='links' >About Me</span></a>
                </li>
              </ul>

            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
export default NavBar