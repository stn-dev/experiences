"use client"

import React, { useRef, useState } from 'react'
import './Contact.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import Spinner from '../../components/Loader/Spinner'

function Contact() {

    const [toName, seToName] = useState(false)
    const [toEmail, seToEmail] = useState(false)
    const [toMessage, seToMessage] = useState(false)
    const [spinner, setSpinner] = useState(false)

    const iptName = useRef<HTMLInputElement>()
    const iptEmail = useRef<HTMLInputElement>()
    const iptMessage = useRef<HTMLTextAreaElement>()



    const form = document.querySelector(".contact-form")


    const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
        let name = iptName?.current?.value
        let email = iptEmail?.current?.value
        let message = iptMessage?.current?.value

        e.preventDefault()

        setSpinner(true)

        const templateParams = {
            to_name: "Mario",
            name: email,
            message: message
        }


        if (name === "" ||
            email === "" ||
            message === ""
        ) {

            setSpinner(false)
            if (name === "") {
                seToName(true)
            }

            if (email === "") {
                seToEmail(true)
            }
            if (message === "") {
                seToMessage(true)
            }

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Some information are missing",
                // footer: '<a href="#">Why do I have this issue?</a>'
            });

            return
        }


        emailjs
            .send("service_56bza87", "template_6q60mjc", templateParams, "Y55U-eVuDLLpHV7wh")
            .then(
                function (response) {

                    setSpinner(false)

                    Swal.fire({
                        icon: "success",
                        title: "OK",
                        text: "Message send successfully",
                    });

                    const form = document.querySelector<HTMLFormElement>(".contact-form")
                    form?.reset()

                    console.log(response)
                },
                function (error) {
                    console.log(error)
                }
            )
    }

    const changeStateName = () => {
        const name = iptName?.current?.value
        if (name !== "") {
            seToName(false)
            console.log(name)
        }
        else {
            seToName(true)
        }
    }

    const changeStateEmail = () => {
        const email = iptEmail?.current?.value
        if (email === "") {
            seToEmail(true)
        }
        else {
            seToEmail(false)
        }
    }

    const changeStateMessage = () => {
        const message = iptMessage?.current?.value
        if (message === "") {
            seToMessage(true)
        }
        else {
            seToMessage(false)
        }
    }


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-section",
                start: 'top 50%',
                end: 'bottom bottom',
                toggleActions: "play none none reverse"
            }
        })

        tl
            .from('.big-text-contact h2', {
                x: 300,
                opacity: 0,
                stagger: 0.3
            })
            .from('.contact-section h6', {
                y: -50,
                opacity: 0
            })
            .from('.contact-form .inputs input', {
                scale: 0,
                stagger: 0.2
            })
            .from('.contact-form .text-area textarea', {
                scale: 0,
            })
            // .from(".contact-form .btn-form", {
            //     opacity: 0
            // })
            .from('.social-media .social-media-icon img', {
                y: -100,
                opacity: 0,
                stagger: 0.2
            })
            .from(".social-media hr", {
                width: 0
            })


    })


    return (
        <div
            className="contact-section"
            id='contact'

        >
            {
                spinner ? <Spinner /> : null
            }
            <div className='contact-section-child' style={{ opacity: spinner ? "0.4" : "1" }} >
                <div className="big-text-contact">
                    <h2>LET'S TALK IF YOU</h2>
                    <h2>THINK WE CAN WORK</h2>
                    <h2>TOGETHER</h2>
                </div  >
                <h6> [contact] </h6>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="inputs">
                        <input
                            ref={iptName}
                            onKeyUp={changeStateName}
                            className={toName ? "error" : ""}
                            type="text"
                            name='username'
                            id='username'
                            placeholder='ENTER YOUR NAME'
                        />
                        <input
                            ref={iptEmail}
                            onKeyUp={changeStateEmail}
                            className={toEmail ? "error" : ""}
                            type="email"
                            name="email"
                            id="email"
                            placeholder='ENTER YOUR E-MAIL'
                        />
                    </div>
                    <div className="text-area">
                        <textarea
                            ref={iptMessage}
                            onKeyUp={changeStateMessage}
                            className={toMessage ? "error" : ""}
                            name="message"
                            id="message"
                            placeholder='ENTER YOUR MESSAGE'
                        >
                        </textarea>
                    </div>
                    <button className='btn-form' disabled={spinner ? true : false} >SEND</button>
                </form>

                <div className="social-media">
                    <hr />
                    <div className="social-media-icon">
                        <img src="/assets/facebook.png" />
                        <img src="/assets/whatsapp.png" />
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Contact