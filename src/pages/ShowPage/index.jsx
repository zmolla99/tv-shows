import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowCard from '../../components/ShowCard'

const ShowPage = () => {

    const { id } = useParams()

    const [show, setShow] = useState({ image: {}, rating: {} })

    const displayShow = async () => {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const data = await response.json()
        setShow(data)
    }

    useEffect(() => {
        displayShow()
    }, [])

    return (
        <div>
            <ShowCard show={show} />
        </div>
    )
}

export default ShowPage