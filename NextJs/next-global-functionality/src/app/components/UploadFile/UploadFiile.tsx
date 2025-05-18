'use client'


import React, { useState } from 'react'
import style from './uploadFile.module.scss'

type Image = {
    image: string
}
function UploadFiile({ image }: Image) {

    const [shadow, setShadow] = useState(false)



    return (
        <>
            <div className={style.container} >
                <label htmlFor="image">
                    <img
                        className={`${shadow && style.image}`}
                        src=
                        {
                            image != ""
                                ?
                                `/uploads/${image}`
                                :
                                "/defaultUserImage.png"
                        }
                        alt=""
                    />
                </label>
                <input
                    onChange={() => setShadow(true)}
                    type="file"
                    name="image"
                    id="image"
                    hidden
                />
            </div>
        </>
    )
}

export default UploadFiile