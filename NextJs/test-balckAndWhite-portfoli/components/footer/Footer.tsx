import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-nav">
                <a href="#home">
                    <h3>HOME</h3>
                    <img src="/assets/Home.png" />
                </a>
                <a href="#about">
                    <h3>ABOUT</h3>
                    <img src="/assets/abouts.png" />
                </a>
                <a href="#skill">
                    <h3>SKILL</h3>
                    <img src="/assets/skills.png" />
                </a>
                <a href="#contact">
                    <h3>CONTACT</h3>
                    <img src="/assets/contacts.png" />
                </a>
            </div>
            <div className="footer-social-media">
                <img src="/assets/facebook.png" />
                <img src="/assets/whatsapp.png" />
            </div>
            <p>
                ©Copy-write2024Mario
            </p>
        </div>
    )
}

export default Footer