import { useRef } from 'react'

function Contact({ toDark }) {

    const form = useRef()
    const name = useRef()
    const mail = useRef()
    const message = useRef()


    const handleSubmit = (e) => {
        e.preventDefault()

        const nameValue = name.current.firstChild.value
        const mailValue = mail.current.firstChild.value
        const nmessageValue = message.current.firstChild.value

        if (nameValue === "" || mailValue === "" || nmessageValue === "") {
            alert("Please , fill all the form to send the message")
        }

        if (nameValue === "".trim()) {
            name.current.className = "nameContainer error"
        }
        if (mailValue === "".trim()) {
            mail.current.className = "mailContainer error"
        }
        if (nmessageValue === "".trim()) {
            message.current.className = "messageContainer error"
        }
    }

    const nameUp = () => {
        const nameValue = name.current.firstChild.value
        if (nameValue !== "") {
            name.current.className = "nameContainer"
        }
        else {
            name.current.className = "nameContainer error"
        }
    }
    const mailUp = () => {
        const mailValue = mail.current.firstChild.value
        if (mailValue !== "") {
            mail.current.className = "mailContainer"
        }
        else {
            mail.current.className = "mailContainer error"
        }
    }
    const messageUp = () => {
        const messgaValue = message.current.firstChild.value
        if (messgaValue !== "") {
            message.current.className = "messageContainer"
        }
        else {
            message.current.className = "messageContainer error"
        }
    }

    return (
        <div
            id='contact'
            className="section contactSection"
        >
            <div className="titleParts">
                <h2>Contact</h2>
                <h4>
                    <span></span>
                    interessted ?
                </h4>
            </div>
            <form
                ref={form}
                onSubmit={handleSubmit}
                className='formContainer'
                action=""
            >
                <div className="input">
                    <div
                        ref={name}
                        className="nameContainer"
                    >
                        <input
                            onKeyUp={nameUp}
                            style={{ backgroundColor: `${toDark ? "black" : "#00798A"}` }}
                            type="text"
                            name="name"
                            id=""
                            placeholder='name'
                        />
                        <img src="src/assets/icon/name.png" />
                        <p>name canot be blank</p>
                    </div>


                    <div
                        ref={mail}
                        className="mailContainer"
                    >
                        <input
                            onKeyUp={mailUp}
                            style={{ backgroundColor: `${toDark ? "black" : "#00798A"}` }}
                            type="email"
                            name="email"
                            id=""
                            placeholder='E-mail'
                        />
                        <img src="src/assets/icon/mail.png" />
                        <p>E-mail canot be blank</p>
                    </div>
                </div>

                <div
                    ref={message}
                    className="messageContainer"
                >
                    <textarea
                        onKeyUp={messageUp}
                        style={{ backgroundColor: `${toDark ? "black" : "#00798A"}` }}
                        name="message"
                        id=""
                        placeholder='message'
                    />
                    <img
                        src="src/assets/icon/messgae.png"
                    />
                    <p>message canot be blank</p>
                </div>
                <button
                    style={{ color: `${toDark ? "black" : "#006B82"}` }}
                    type="submit"
                >
                    submit
                </button>

            </form>
        </div>
    )
}

export default Contact