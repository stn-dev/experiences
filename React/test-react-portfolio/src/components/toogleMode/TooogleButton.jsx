import React, { useState } from 'react'

function TooogleButton({ dark, onClick }) {

    return (
        <div
            className={dark ? `darkside` : "ligthside"}
            onClick={onClick}
        >
            <div
                className={dark ? "dark" : "light"}
            ></div>
        </div>
    )
}

export default TooogleButton