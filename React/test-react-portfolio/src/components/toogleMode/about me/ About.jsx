import React from 'react'

function About({ toDark }) {
    return (
        <div
            id='about'
            className="section aboutSection"
        >
            <div className="titleDiv">
                <h2>About me</h2>
                <h4>
                    <span></span>
                    Who Am I?
                </h4>
            </div>

            <div className="aboutInfos">
                <div
                    className="image"
                    style={{ backgroundColor: `${toDark ? "#454545" : "#00798A"}` }}
                >
                    image
                </div>
                <p >
                    My full name is RAFANOMEZANTSOA Santatriniaina Mario. A young front-end developer and UI/UX designer based in Madagascar. My goal is to create a beautiful and attractive design user interface with the best functionality.I want to use my knowledge in service of someone who got the same target as mine so if you are interested let`s talk!
                </p>
            </div>

        </div>
    )
}

export default About