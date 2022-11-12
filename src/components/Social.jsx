import React from 'react';
// import github from '../images/icons8-github-48.png'
// import instagram from '../images/icons8-instagram-48.png'
// import fb from '../images/icons8-facebook-48.png'
// import linkedin from '../images/icons8-linkedin-48.png'
// import twitter from '../images/icons8-twitter-48.png'

const Social = () => {
    return (
        <>
        <div className='social-media '>
            <div><a href=""><i className="fa-brands linkedin fa-linkedin-in fa-2x p-2 w-100"></i></a></div>
            <div><a href=""><i className='fa-brands github fa-github fa-2x p-2 w-100'></i></a></div>
            <div><a href=""><i className='fa-brands instagram fa-instagram fa-2x p-2 w-100'></i></a></div>
            <div><a href=""><i className='fa-brands twitter fa-twitter fa-2x p-2 w-100'></i></a></div>
        </div>
            
        </>
    )
}
export default Social;