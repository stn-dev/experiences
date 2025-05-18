import React from 'react'
import './About.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function About() {

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".aboutSection",
                start: "top 50%",
                markers: true,
                end: "bottom 60%",
                toggleActions: "play none none reverse"
            }
        })

        tl
            .from(".aboutSection p", {
                opacity: 0,
                top: 50
            })
            .from(".big-text-about h2", {
                y: 100,
                opacity: 0,
                stagger: 0.4
            })
            .from(".about-text h5", {
                position: "absolute",
                opacity: 0,
                left: -500
            }, "-=0.5")
            .from(".about-img-container", {
                scale: 0
            })


        gsap.to(".big-text-about", {
            top: 90,
            left: 400,
            opacity: 0,
            scrollTrigger: {
                trigger: '.aboutSection',
                start: "100px top",
                scrub: 1
            }
        })

        gsap.to(".about-img-container", {
            top: 0,
            opacity: 0,
            scrollTrigger: {
                trigger: '.aboutSection',
                start: "100px top",
                scrub: 1
            }
        })
        gsap.to(".about-text", {
            right: 800,
            opacity: 0.2,
            scrollTrigger: {
                trigger: '.aboutSection',
                start: "100px top",
                scrub: 1,
            }
        })


    }, [])

    return (
        <div className="aboutSection" id='about'>
            <p>[about]</p>
            <div className="big-text-about">
                <h2>LET'S</h2>
                <h2>TALK</h2>
                <h2>ABOUT</h2>
                <h2>MYSELF</h2>
            </div>
            <div className="about-text">
                <h5>
                    My full name is RAFANOMEZANTSOA Santatriniaina Mario. A young front-end developer and UI/UX designer based in Madagascar. My goal is to create a beautiful and attractive design user interface with the best functionality.I want to use my knowledge in service of someone who got the same target as mine so if you are interested let's talk!
                </h5>
            </div>
            <div className="about-img-container">
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default About