"use client"
import React from 'react'

interface ButtonSimpleProps {
    label: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function ButtonSimple({ label, onClick }: ButtonSimpleProps) {

    return (
        <button onClick={onClick}>{label}</button>
    )
}


