import React from 'react'
import ShowCard from '../ShowCard'
import { useSearch } from '../../contexts'

const ShowList = () => {

    const { showData } = useSearch()

    return (
        <>
            {showData.map((item) => item.image ? <ShowCard show={item} key={item.id} /> : '')}
        </>
    )
}

export default ShowList