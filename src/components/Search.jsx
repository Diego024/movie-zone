import React from 'react';
import Icon from '../components/Icon'
import searchIcon from '../assets/statics/search-icon.png'

const Search = () => {
    return(
        <>
            <div className="bg-gray-800 flex flex-row items-center">
                <Icon/>
                <div className="flex flex-row items-center w-3/4 rounded ml-28">
                    <input className="h-10 pl-3 w-2/4 outline-none bg-gray-700 border border-gray-600 border-r-0 text-white" type="text" name="search" id="search"/>
                    <a href="">
                        <img className="bg-gray-900 h-10 w-17 px-6 py-2 border-gray-600 border" src={searchIcon} alt="Search Icon"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Search;