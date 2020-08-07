import React from 'react'
import Ux1m15 from '../images/uxim15.png';

function Header() {
    return (
        <div className="header">
            <div className="header-location">
                <h3>April, 2020</h3>
            </div>
            <div className="header-logo">
                <img src={Ux1m15} className="UX Immersion Mobile Conference April 2020" alt="logo" />
            </div>
            
        </div>
    )
}

export default Header
