import React from 'react'

function Hero({ toDark }) {
    return (
        <div
            className="section heroSection"
            id='hero'
        >

            {/* social media side  */}
            <div className="socialMedia">
                <hr className='line1' />
                <div className="socialIcons">
                    <img src="src/assets/icon/facebok.png" />
                    <img src="src/assets/icon/instagram.png" />
                    <img src="src/assets/icon/messenger.png" />
                    <img src="src/assets/icon/whatsup.png" />
                </div>
                <hr className='line2' />
            </div>


            {/* information side and intro  */}
            <div className="introducing">
                <h4>Hello, I'm</h4>
                <h2>Mario</h2>
                <h3 className='front'>
                    Front-end developer
                </h3>
                <h3 className='design'>
                    UI/UX Designer
                </h3>
                <p>
                    This is my personal portfolio and i invite you to visit it . Contact me if you want us to work together or click the button bellow
                </p>
                <button
                    style={{ color: `${toDark ? "black" : "#006B82"}` }}
                >
                    Hire me
                </button>
            </div>


            {/* image side  */}
            <div
                className="image"
                style={{ backgroundColor: `${toDark ? "#454545" : "#00798A"}` }}
            >
                image
            </div>
        </div>
    )
}

export default Hero