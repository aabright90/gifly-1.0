import React from 'react'

const Gif = ({ id, selectGif }) => {

    const selectAGif = () => {
        selectGif(id)
        console.log('clicked', id);
    }

    const src = `https://media1.giphy.com/media/${id}/200w.gif`;
    return (
        <div className="gif-container">
            <img src={src} className="gif" onClick={selectAGif} alt="gif"/>
        </div>
    )
}

export default Gif