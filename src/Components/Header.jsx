import '../Styles/Header.css'
import React from "react"
import {Link} from "react-router-dom";

export default function Header() {

    // let chimesAudio = new Audio("windChimes.mp3")

    // function linkNoise() {
    //     chimesAudio.play()
    // }

    return (
        <div className='headerContainer'>
            <div className='logoCont'> 

            </div>
            <div className='menuContainer'>
                <Link to="/Home" className='linkText'>Home Page</Link>
                <Link to="/About" className='linkText'>About Us </Link>
                <Link to="/Buy" className='linkText'>Buy</Link>
                <Link to="/Sell" className='linkText'>Sell</Link>
            </div>
            <div className='basketContainer'>
                <Link to="/Basket" className='linkText'>Basket</Link>
            </div>
        </div>
    )
}