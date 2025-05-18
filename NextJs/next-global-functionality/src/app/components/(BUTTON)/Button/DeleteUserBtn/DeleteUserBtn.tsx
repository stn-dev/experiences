"use client"

import React, { useEffect, useState } from 'react'
import style from "./DeleteUser.module.scss"
import { useRouter } from 'next/navigation'


type Props = {
    params: { id: string }
}

function DeleteUserBtn({ params }: Props) {

    const router = useRouter()
    const [userImage, setUserImage] = useState('')

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch(`http://localhost:3000/api/user/${params.id}`)

            const { data } = await res.json()

            setUserImage(data.image)
            console.log(data.image)
        }

        getUser()

    }, [])

    const handleDelete = async () => {

        const conf = confirm('Are you sure to delete this user?')

        try {
            if (conf) {


                const deleteIfmage = await fetch(`http://localhost:3000/api/user/uploadImage?fileName=${userImage}`, {
                    method: "DELETE",
                    next: {
                        revalidate: 0
                    }
                })

                const res = await fetch(`http://localhost:3000/api/user/${params.id}`, {
                    next: {
                        revalidate: 0
                    },
                    method: "DELETE"
                },
                )

                if (res.ok && deleteIfmage.ok) {
                    alert("user deleted")
                    router.refresh()
                    router.push("/user")
                } else {
                    alert("error occuring, user not deleted")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <button
            className={style.deleteBtn}
            onClick={handleDelete}
        >
            DELETE
        </button>
    )
}

export default DeleteUserBtn