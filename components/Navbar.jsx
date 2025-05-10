import React from 'react'

const Navbar = () => {
  return (
    <>
 

        <nav>
        <div>
          <h1 className='text'>Lucky <spam> A.</spam> </h1>
        </div>

        <div className='nav-list'/>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
             <li><a href="#">Content</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div/>

          <div>
            <button className='btn'>icon</button>
          </div>
            
        </nav>
    </>
  )
}

export default Navbar