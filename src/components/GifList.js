import React from 'react'
import Gif from './Gif'

const GifList = ({gifs, selectGif}) => {

    return (
        <div className="gif-list">
          { gifs.map(gif => {
             return <Gif key={gif.id} id={gif.id} selectGif={selectGif}/> 
          })}
        </div>
    )
}

export default GifList