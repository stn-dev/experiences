"use client"

import React, { useEffect } from 'react'
import { animatePageIn } from '../utiles/animate'

function template({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        animatePageIn()
    })

    return (
        <div className='w-screen min-h-screen overflow-x-hidden'>
            {children}
        </div>
    )
}

export default template