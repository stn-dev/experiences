import React, { useState } from 'react'
import TooogleButton from '../TooogleButton'
import { Link, NavLink } from 'react-router-dom'

function NavBar({ toDark, onClick, hero, about, skill, contact }) {

    const [menu, setMenu] = useState(false)

    const switchMenu = () => setMenu(!menu)

    return (
        <nav
            className="navbar"
            style={{ backgroundColor: `${toDark ? "black" : "#006B82"}` }}
        >
            <img src="src/assets/logo.png" />

            <div
                style={{ backgroundColor: `${toDark ? "black" : "#006B82"}` }}
                className={`nav ${menu && "showNav"}`}
            >
                <a
                    href="#hero"
                    className={hero ? "active" : ""}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className={about ? "active" : ""}
                >
                    About
                </a>

                <a
                    href="#skill"
                    className={skill ? "active" : ""}
                >
                    Skill
                </a>
                <a
                    href="#contact"
                    className={contact ? "active" : ""}
                >
                    Contact
                </a>
            </div>


            <TooogleButton
                dark={toDark}
                onClick={onClick}
            />

            <div
                onClick={switchMenu}
                className={`menuIcon ${menu && "cross"}`}
            >
                <hr className='firstChild' />
                <hr className='secondChild' />
                <hr className='lastChild' />
            </div>
        </nav>
    )
}

export default NavBar