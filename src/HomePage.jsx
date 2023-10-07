import React from 'react'
import './HomePage.css'
import deakin from './images/deakin.jpg'
import Footer from './Footer'

export default function HomePage() {
    return (
        <div>
            <div className="containerText">
                <img className='mainImage' src={deakin} alt="deakin" />
                <div className="name">
                    <h3 style={{ textAlign: "center" }}>Welcome to Ask and Post, DEV@DEAKIN!</h3>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
