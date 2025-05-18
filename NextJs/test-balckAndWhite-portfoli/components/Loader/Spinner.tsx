"use client"

import React, { CSSProperties } from 'react'
import { BeatLoader } from 'react-spinners'


function Spinner() {

    const override: CSSProperties = {
        display: "block",
        position: "absolute",
        top: "45%",
        left: "45%"
    };

    return (
        <div className='spinner' >
            <BeatLoader
                cssOverride={override}
            />
        </div>
    )
}

export default Spinner