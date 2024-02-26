import React, { useState, useEffect } from 'react'
import ShowList from '../ShowList'
import { useSearch } from '../../contexts'

const SearchWidget = () => {

    const [inputValue, setInputValue] = useState('')

    const [searchString, setSearchString] = useState('')

    const { setShowData } = useSearch()

    const searchApi = async () => {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
        const rawData = await response.json()
        const data = rawData.map((item) => item.show)
        setShowData(data)
    }

    useEffect(() => {
        searchApi()
    }, [searchString])

    const handleInput = (e) => {
        const newInput = e.target.value
        setInputValue(newInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchString(inputValue)
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleInput} value={inputValue} required />
                <input type='submit' value='search' />
            </form>
            <br />
            <ShowList />
        </>
    )
}

export default SearchWidget