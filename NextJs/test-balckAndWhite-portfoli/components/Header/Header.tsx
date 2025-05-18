"use client"

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import "./Header.scss"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRouter } from 'next/router'
import { useParams, usePathname } from 'next/navigation'

type Props = {
}

function MyHeader({ }: Props) {
    const [menu, setMenu] = useState(true)


    const changeMenu = () => {
        setMenu(!menu)
        console.log(menu)
    }

    const toFalse = () => {
        setMenu(true)
        console.log(menu)
    }


    useGSAP(() => {
        const tl = gsap.timeline()
        if (!menu) {
            tl
                .to(".transition", {
                    left: 0,
                    delay: 0
                })
                .to(".transition span", {
                    width: '100%',
                    stagger: 0.2
                })
                .to(".linksContainer", {
                    left: 0,
                    opacity: 1,
                    backgroundColor: "#AFAFAF"
                })
                .to(".link", {
                    opacity: 1,
                }, '<0.5')
                .from(".link hr", {
                    width: 0,
                    stagger: 0.2
                }, "-=1")
                .from(".link img", {
                    scale: 0,
                    stagger: 0.2,
                    ease: 'bounce'
                })

        }
        if (menu) {
            tl
                .to(".link", {
                    opacity: 0,
                })
                .to(".linksContainer", {
                    left: "-100vw",
                })
                .to(".transition span", {
                    width: 0,
                    stagger: 0.2
                })
                .to(".transition", {
                    left: '-100vw'
                })

        }

    }, [menu])

    return (
        <nav className={"navigation"} >
            <img src="/assets/logo.png" alt="logo image" />
            <div
                className={"menu"}
                onClick={changeMenu}
            >
                <div className={"line"} >
                    <hr
                        className={menu ? "one" : "rotate1"}
                    />
                    <hr
                        className={menu ? "two" : "rotate2"}
                    />
                </div>
                <div
                    className={"text"}
                >
                    {menu ? "MENU" : "CLOSE"}
                </div>
            </div>
            <div
                className={"linksContainer"}
            >
                <div className={"link"}>
                    <Link
                        href='#home'
                        onClick={toFalse}
                    >
                        HOME
                    </Link>
                    <img src="assets/parameterLoge.png" />
                    <hr />
                </div>
                <div className={"link"}>
                    <Link
                        href='#about'
                        onClick={toFalse}
                    >
                        ABOUT
                    </Link>
                    <img src="assets/parameterLoge.png" />
                    <hr />
                </div>
                <div className={"link"}>
                    <Link
                        href='#skill'
                        onClick={toFalse}
                    >
                        SKILL
                    </Link>
                    <img src="assets/parameterLoge.png" />
                    <hr />
                </div>
                <div className={"link"}>
                    <Link
                        href='#contact'
                        onClick={toFalse}
                    >
                        CONTACT
                    </Link>
                    <img src="assets/parameterLoge.png" />
                    <hr />
                </div>

            </div>
            <div className={"transition"} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1
                className="welcoming"
            >
                <p className="welcome" >WELCOME</p>
                <p className="to-my" >TO MY</p>
                <p className="personal" >PERSONAL</p>
                <p className="portfolio" >PORTFOLIO</p>
            </h1>
            <div className="overlay">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default MyHeader