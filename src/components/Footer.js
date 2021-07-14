import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <p className="col-sm" style={{ color: 'white ' }} >
                        &copy;{new Date().getFullYear()} CINEMA MOVIES INC | All rights reserved | Terms Of Services | Privacy
                    </p>
                </div>
            </div>
            {/* <h1>copyright@helloreact</h1> */}

        </div>
    )
}
export default Footer;
