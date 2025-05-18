import React from 'react'
import "./Skill.scss"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Skill() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        /* animation first part*/
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skill-section",
                start: "top 30%",
                end: "bottom 70%",
                toggleActions: "play none none reverse"
            }
        })

        tl
            .from(".skill-section h6", {
                top: 0,
                opacity: 0
            })
            .from(".big-text-part h2", {
                y: -200,
                opacity: 0,
                stagger: 0.3
            })
            .from(".animation-part  ", {
                x: -100,
                opacity: 0,
            }, "-=0.5")


        // gsap.to(".big-text-part", {
        //     x: 200,
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: ".skill-section",
        //         start: "150px top",
        //         end: "50% 60%",
        //         scrub: 1
        //     }
        // })

        // gsap.to(".mini-cube-skill span", {
        //     opacity: 0,
        //     duration: 1,
        //     scrollTrigger: {
        //         trigger: ".skill-section",
        //         start: "150px top",
        //         end: "50% 60%",
        //         scrub: 1
        //     }
        // })
        // gsap.to(".big-cube span", {
        //     opacity: 0,
        //     duration: 1,
        //     scrollTrigger: {
        //         trigger: ".skill-section",
        //         start: "150px top",
        //         end: "50% 60%",
        //         scrub: 1
        //     }
        // })

        /* animation second part*/
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".skill-second-section",
                start: "top 30%",
                end: "bottom 80%",
                toggleActions: "play none none reverse"
            }
        })

        tl2
            /*core */
            .from(".core .title h3", {
                y: -50,
                opacity: 0,
                duration: 0.3
            })
            .from(".core .title hr", {
                width: 0,
                duration: 0.3
            })
            .from(".core .logo .img-container", {
                scale: 0,
                stagger: 0.2
            })

            /*framework */
            .from(".framework .title h3", {
                y: -50,
                opacity: 0,
                duration: 0.3
            })
            .from(".framework .title hr", {
                width: 0,
                duration: 0.3
            })
            .from(".framework .logo .img-container", {
                scale: 0,
                stagger: 0.2
            })

            /*other tools */
            .from(".other-tools .title h3", {
                y: -50,
                opacity: 0,
                duration: 0.3
            })
            .from(".other-tools .title hr", {
                width: 0,
                duration: 0.3
            })
            .from(".other-tools .logo .img-container", {
                scale: 0,
                stagger: 0.2
            })


        gsap.to(".framework", {
            x: -500,
            opacity: 0,
            scrollTrigger: {
                trigger: ".skill-second-section",
                start: "39% top",
                scrub: 1,
            }
        })
        gsap.to(".other-tools", {
            x: 500,
            opacity: 0,
            scrollTrigger: {
                trigger: ".skill-second-section",
                start: "39% top",
                scrub: 1,
            }
        })

    }, [])

    return (
        <div className='skill-section' id='skill'>

            <h6>[skill]</h6>

            <div className="skill-first-section">

                {/* cube part  */}
                <div className="animation-part">

                    <div className="mini-cube-skill">
                        <span className='front' >
                            SCROLL
                        </span>
                        <span className='back' >
                            DOWN
                        </span>
                        <span className='left' >
                            SCROLL
                        </span>
                        <span className='rigth' >
                            DOWN
                        </span>
                        <span className='top' >
                            SCROLL
                        </span>
                    </div>

                    <div className="big-cube">
                        <span className='front' >
                            OVER
                        </span>
                        <span className='back' >
                            OVER
                        </span>
                        <span className='left' >
                            SKILLS
                        </span>
                        <span className='rigth' >
                            SKILLS
                        </span>
                        <span className='top' >
                            HOVER
                        </span>
                    </div>

                </div>

                {/* text part  */}
                <div className="big-text-part">
                    <h2>THE STACK</h2>
                    <h2>I CAN</h2>
                    <h2>WORK WITH</h2>
                    <h2>FOR NOW</h2>
                    <h2>ARE BELLOW!</h2>
                </div>
            </div>

            {/* skill logo part  */}
            <div className="skill-second-section">

                <div className="core">
                    <div className="title">
                        <hr />
                        <h3>CORE</h3>
                        <hr />
                    </div>
                    <div className="logo">

                        <div className="img-container">
                            <img src="assets/html.png" />
                            <p>HTML</p>
                        </div>
                        <div className="img-container">
                            <img src="assets/css.png" />
                            <p>CSS</p>
                        </div>
                        <div className="img-container">
                            <img src="assets/javascript.png" />
                            <p>JAVASCRIT</p>
                        </div>

                    </div>
                </div>


                <div className="framework">
                    <div className="title">
                        <hr />
                        <h3>FRAMEWORK</h3>
                        <hr />
                    </div>
                    <div className="logo">
                        <div className="img-container">
                            <span>
                                <img src="assets/sass.png" />
                            </span>
                            <p>SASS</p>
                        </div>
                        <div className="img-container">
                            <span>
                                <img src="assets/tailwinds.png" />
                            </span>
                            <p>TAILWIND</p>
                        </div>
                        <div className="img-container">
                            <span>
                                <img src="assets/reacts.png" />
                            </span>
                            <p>REACT</p>
                        </div>
                        <div className="img-container">
                            <img src="assets/next.png" />
                            <p>NEXT</p>
                        </div>
                        <div className="img-container">
                            <img src="assets/TS.png" />
                            <p>TYPESCRIPT</p>
                        </div>

                    </div>
                </div>

                <div className="other-tools">
                    <div className="title">
                        <hr />
                        <h3>OTHER TOOLS</h3>
                        <hr />
                    </div>
                    <div className="logo">
                        <div className="img-container">
                            <span className='FIGMA'>
                                <img src="assets/figma logo.png" />
                            </span>
                            <p>FIGMA</p>
                        </div>
                        <div className="img-container">
                            <img src="assets/gsap.png" />
                            <p>GSAP</p>
                        </div>
                        <div className="img-container">
                            <img src="assets/git.png" />
                            <p>GIT</p>
                        </div>
                        <div className="img-container">
                            <img src="assets/github.png" />
                            <p>GITHUB</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skill