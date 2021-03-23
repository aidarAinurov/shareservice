import React from "react";
import './Aside.css'
import Logo from './../../img/logo.svg'
import Home from './../../img/navHome.svg'
import Parties from './../../img/parties.svg'

function Aside() {
    return (
        <div className="aside">
            <div className="logo">
                <img src={Logo} alt="logo"  />
                <p className="brandName">Coal<span>Party</span></p>
            </div>
            <nav className="navbar">
                <div className="home">
                    <img src={Home} alt="Home"/>
                    <p>Home</p>
                </div>
                <div className="parties">
                    <img src={Parties} alt="Parties"/>
                    <p>My parties</p>
                </div>
            </nav>
        </div>
    );
}

export default Aside;
