import React from "react";
import './NavBar.css'
import CompanyLogo from '../../assets/RLogo1.svg'

const NavBar = () => {


    return (
        <>
        <div className="CenteringNav">
            <div className="NavBar">
                <a className="Logo"><img src={CompanyLogo} alt="The letter P holding a tube that is shooting out sand." /></a>
                <a className="CTA" tel href="tel:9142347816">Give us a Call!</a>
            </div>
        </div>
        </>
    )

}

export default NavBar;