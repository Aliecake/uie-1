import React from 'react'
import uie from '../images/uie.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-2-col">
                <div className="footer-contact-card">
                    Questions or comments? Please send e-mail to events@uie.com. UX Immersion Mobile Conference is a proud production of User Interface Engineering.
                </div>
                <div className="footer-copyright-card">
                    Copyright © 2020, User Interface Engineering. All Rights Reserved. 
                    510 Turnpike St., Suite 102, North Andover, MA 01845
                    <p>1.800.588.9855 (within the U.S. and Canada) or +1.978.327.5561</p>
                </div>
            </div>

            <div className="footer-image-card">
                <img src={uie} className="footer-img" alt="UXMobileImmersion logo" />
            </div>
           

        </div>
    )
}
