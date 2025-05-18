import { Tune } from '@mui/icons-material'
import React, { useState } from 'react'

function Skill({ toDark }) {


    const Skills = [
        {
            title: "FIGMA",
            src: "src/assets/figma.png"
        },
        {
            title: "HTML",
            src: "src/assets/HTML.png"
        },
        {
            title: "CSS",
            src: "src/assets/CSS.png"
        },
        {
            title: "javascript",
            src: "src/assets/JS.png"
        },
        {
            title: "typescript",
            src: "src/assets/tTS.png"
        },
        {
            title: "GIT",
            src: "src/assets/GIT.png"
        },
        {
            title: "SASS",
            src: "src/assets/SASS.png"
        },
        {
            title: "tailwind",
            src: "src/assets/tailwind.png"
        },
        {
            title: "react",
            src: "src/assets/react.png"
        },
        {
            title: "GSAP",
            src: "src/assets/GSAP.png"
        }
    ]

    return (
        <div
            id='skill'
            className="section skillSection"
        >

            <div className="titlePart">
                <h2>Skill</h2>
                <h4>
                    <span></span>
                    What can i do?
                </h4>
                <p>
                    There are all the stack i can work with for now
                </p>
            </div>

            <div className="skills">
                {
                    Skills.map((skill, id) => {
                        return (
                            <div
                                className="hiddlenPart"
                                key={id}
                            >

                                <div
                                    key={id}
                                    className="skill"
                                    style={{ backgroundColor: `${toDark ? "black" : "#00798A"}` }}
                                >
                                    <img src={skill.src} />
                                </div>
                                {/* 
                                <span>
                                    {skill.title}
                                </span> */}

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skill