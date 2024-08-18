import React from 'react'
import D from'../IMAGES/D.webp'
function Head() {
  return (
    

<div className='main container-fluid'>
    <div className=' ' >

      
        <nav className="navbar bg-body-tertiary ">
          
            <img src={D} width="50px" height="50px"></img>
            <a className="navbar-brand" href="#">

            </a>
            <ul className=" nav ">
              <li className="nav-item">
                <a className=" nav-link active " aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">ROOMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">WELLNESS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">PACKAGES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">CONTACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link header" href="#">BOOKS</a>
              </li>
            </ul>
          
        </nav></div>





    </div>
  )
}

export default Head
              