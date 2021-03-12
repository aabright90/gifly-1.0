import React from 'react'


const SearchBar = ({search}) => {
    return (
        <div>
            <input 
            className="form-search" 
            onChange={(event) => search(event.target.value) } 
            placeholder='monty python'
            />
        </div>
    ) 
}

export default SearchBar