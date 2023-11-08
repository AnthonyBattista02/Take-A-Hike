//import React from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
//import axios from 'axios'


//import './Nav.css'

export default function Nav() {
  
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Event listener for Hamburger click
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    });

    // Event listeners for Nav links
    document.querySelectorAll(".nav-link").forEach((navLink) => {
      navLink.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      });
    });

    //Clean up event listeners when the Component unmounts
    return () => {
      hamburger.removeEventListener("click")
      document.querySelectorAll(".nav-link").forEach((navLink) => {
        navLink.removeEventListener("click")
      })
    }
  }, [])

  
  return (
    <Nav>
      <div className="container">
        <div className="subcontainer">
          <nav className='nav'>
            <Link to="/" className='nav-branding'>Take A Hike!</Link>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <Link to='/user-trails' className='nav-link'>User Trails</Link>
              </li>
              <li className='nav-item'>
                <Link to='/trails' className='nav-link'>Trails</Link>
              </li>
              <li className='nav-item'>
                <Link to='/home' className='nav-link'>Home</Link>
              </li>
            </ul>
            <div className='hamburger'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
          </nav>
        </div>
      </div>
    </Nav>
  )
}





// import React, { useState } from 'react';
// import {
//   MDBIcon,
//   MDBBtn,
//   MDBSideNav,
//   MDBSideNavItem,
//   MDBSideNavLink,
//   MDBSideNavMenu,
//   MDBSideNavCollapse
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [basicOpen, setBasicOpen] = useState(true);
//   const [basicCollapse1, setBasicCollapse1] = useState(true);
//   const [basicCollapse2, setBasicCollapse2] = useState(false);

//   return (
//     <>
//       <MDBSideNav isOpen={basicOpen} absolute getOpenState={(e: any) => setBasicOpen(e)}>
//         <MDBSideNavMenu>
//           <MDBSideNavItem>
//             <MDBSideNavLink>
//               <MDBIcon far icon='smile' className='fa-fw me-3' />
//               <span className='sidenav-non-slim'>Link 1</span>
//             </MDBSideNavLink>
//           </MDBSideNavItem>
//           <MDBSideNavItem>
//             <MDBSideNavLink
//               icon='angle-down'
//               shouldBeExpanded={basicCollapse1}
//               onClick={() => setBasicCollapse1(!basicCollapse1)}
//             >
//               <MDBIcon fas icon='grin' className='fa-fw me-3' />
//               <span className='sidenav-non-slim'>Category 1</span>
//             </MDBSideNavLink>
//             <MDBSideNavCollapse show={basicCollapse1}>
//               <MDBSideNavLink>Link 2</MDBSideNavLink>
//               <MDBSideNavLink>Link 3</MDBSideNavLink>
//             </MDBSideNavCollapse>
//           </MDBSideNavItem>
//           <MDBSideNavItem>
//             <MDBSideNavLink
//               icon='angle-down'
//               shouldBeExpanded={basicCollapse2}
//               onClick={() => setBasicCollapse2(!basicCollapse2)}
//             >
//               <MDBIcon fas icon='grin' className='fa-fw me-3' />
//               Category 2
//             </MDBSideNavLink>
//             <MDBSideNavCollapse show={basicCollapse2}>
//               <MDBSideNavLink>Link 4</MDBSideNavLink>
//               <MDBSideNavLink>Link 5</MDBSideNavLink>
//             </MDBSideNavCollapse>
//           </MDBSideNavItem>
//         </MDBSideNavMenu>
//       </MDBSideNav>

//       <div style={{ padding: '20px' }} className='text-center'>
//         <MDBBtn onClick={() => setBasicOpen(!basicOpen)}>
//           <MDBIcon fas icon='bars' />
//         </MDBBtn>
//       </div>
//     </>
//   );
// }