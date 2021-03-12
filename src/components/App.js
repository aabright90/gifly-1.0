import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import giphy from 'giphy-api'
import GifList from './GifList'
import Gif from './Gif'


const App = () => {


    const [gifs, setGifs] = useState([])
    const [gif, setGif] = useState(null)

    const search = (query) => {
        const API = 'hLoEauJRXf9VJSRtEVpHfbXlH29866DP'
        giphy(API).search({
            q: query,
            rating: 'r',
            limit: 15
        }, (error, result) => {
            setGifs(result.data)
        })
    }

    const selectGif = (id) => {
        setGif(id)
    }

    useEffect(() => {
        search('monty python')
    }, [])

    return (
        <div>
            <div className="left-scene">
                <SearchBar search={search}/>
                <Gif id={gif}/>
            </div>
            <div className="right-scene">
                <GifList 
                gifs={gifs}
                selectGif={selectGif}
                />
            </div>
        </div>
    ) 
}

export default App