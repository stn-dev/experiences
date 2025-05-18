import React from 'react'

function Footer({ toDark }) {

    const footerNav = [
        {
            src: "src/assets/footer icons/home.png",
            href: "#hero",
            text: "Home"
        },
        {
            src: "src/assets/footer icons/about.png",
            href: "#baout",
            text: "About"
        },
        {
            src: "src/assets/footer icons/skill.png",
            href: "#skill",
            text: "Skill"
        },
        {
            src: "src/assets/footer icons/contact.png",
            href: "#contact",
            text: "Contact"
        },
    ]

    return (
        <div
            style={{ backgroundColor: `${toDark ? "#001619" : "#005772"}` }}
            className="footerSection"
        >

            <div className="footerNav">
                {
                    footerNav.map((nav, id) => {
                        return (
                            <a
                                key={id}
                                href={nav.href}
                            >
                                <img src={nav.src} />
                                <p> {nav.text} </p>
                            </a>
                        )
                    })
                }
            </div>

            <div className="socialMedia">

                <img src="src/assets/icon/messenger.png" />
                <img src="src/assets/icon/whatsup.png" />
                <img src="src/assets/icon/facebok.png" />
                <img src="src/assets/icon/instagram.png" />

            </div>
            <h6>©Copy-write2024Mario</h6>
        </div>
    )
}

export default Footer