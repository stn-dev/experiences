"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import About from "../../page/about/About";
import { ScrollTrigger } from "gsap/all";
import Skill from "../../page/Skill/Skill";
import Contact from "../../page/contact/Contact";
import Footer from "../../components/footer/Footer";

export default function Home() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)


  const rotationValue = 100; /* degrée de rotation */

  const handleMouseMove = (e: React.MouseEvent) => {
    setX(e.clientX)
    setY(e.clientY)

    setRotateX(-(y / window.innerHeight - 0.5) * rotationValue)
    setRotateY((x / window.innerWidth - 0.5) * rotationValue)
  }


  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    tl
      .from(".cube3d", {
        scale: 0,
        duration: 1,
      }, "7.5")
      .from(".intro-section h2", {
        opacity: 0,
        x: -100,
        stagger: 0.3,
        duration: 1,
      })
      .from(".intro-section h4", {
        opacity: 0,
        x: 100,
        duration: 0.5
      })
      .from(".intro-section p", {
        opacity: 0,
        x: 100,
        duration: 0.5
      })
      .from(".staf-part h4", {
        x: -100,
        opacity: 0
      }, "-=1")
      .from(".staf-part h2", {
        x: 100,
        opacity: 0,
        stagger: 0.3
      })

    gsap.to(".intro-section", {
      left: 600,
      opacity: 0,
      scrollTrigger: {
        trigger: ".homeSection",
        scrub: 1,
        start: "top top",
      }
    })
    gsap.to(".staf-part", {
      right: 600,
      opacity: 0,
      scrollTrigger: {
        trigger: ".homeSection",
        scrub: 1,
        start: "top top",
      }
    })

  }, [])

  return (
    <>

      {/* home section  */}
      <div
        id="home"
        className="homeSection"
        onMouseMove={handleMouseMove}
      >
        <div
          className="cube3d"
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        >
          <span className="face front" ></span>
          <span className="face back" ></span>
          <span className="face left" ></span>
          <span className="face rigth" ></span>
          <span className="face top" ></span>
          <span className="face bottom" ></span>
        </div>
        <div className="intro-section">
          <h2 data-splitting>HI!</h2>
          <h2>
            I'M MARIO
            <div
              className="mouseEffect"
            >

            </div>
          </h2>
          <h4> THIS IS MY PERSONAL PORTFOLIO</h4>
          <p>SCROLL DOWN AND VISIT MY WORD</p>

        </div>
        <div className="staf-part">
          <h4>I AM A</h4>
          <h2>FRONT-END</h2>
          <h2>DEVELOPER</h2>
        </div>
      </div>
      <About />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}
