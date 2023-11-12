import React from "react";

export default function Nav () {
  return(
    <div className="Nav">
      
    </div>
  )
}

// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBCollapse,
//   MDBNavbar,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBBtn,
// } from 'mdb-react-ui-kit';

// export default function Nav() {
//   const [showNavExternal2, setShowNavExternal2] = useState(true);

//   return (

//     <>
//       <MDBNavbar>
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             type='button'
//             data-target='#navbarToggleExternalContent'
//             aria-controls='navbarToggleExternalContent'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setShowNavExternal2(!showNavExternal2)}
//           >
//             <MDBIcon icon='bars' fas />
//           </MDBNavbarToggler>
//         </MDBContainer>
//       </MDBNavbar>

//       <MDBCollapse show={showNavExternal2}>
//         <div className='bg-light shadow-3 p-4'>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//             Link 1
//           </MDBBtn>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//             Link 2
//           </MDBBtn>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//             Link 2
//           </MDBBtn>
//         </div>
//       </MDBCollapse>
//     </>
//   )
// }