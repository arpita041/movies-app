import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col" style={{ color: 'white ' }}>
            <h6>Minigroup Inc</h6>
            <h6 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Panvel, Mumbai</li>
              <li>123 Street South North</li>
            </h6>
          </div>
         
          {/* Column2 */}
          <div className="col" style={{ color: 'white ' }}>
            <h6>About</h6>
            <ui className="list-unstyled">
              <li>Find showtimes, watch trailers, browse photos, track your watchlist and rate your favorite movies and TV shows on your phone or tablet!</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
        <p className="col-sm" style={{ color: 'white ' }} >
                        &copy;{new Date().getFullYear()} CINEMA MOVIES INC | All rights reserved | Terms Of Services | Privacy
                     </p>
        </div>
      </div>
    </div>
        
    //     <div className="main-footer">
    //         <div className="container">
    //             <div className="row">
    //                 <p className="col-sm" style={{ color: 'white ' }} >
    //                     &copy;{new Date().getFullYear()} CINEMA MOVIES INC | All rights reserved | Terms Of Services | Privacy
    //                 </p>
    //             </div>
    //         </div>
    //         {/* <h1>copyright@helloreact</h1> */}

    //     </div>
     )
}
export default Footer;
