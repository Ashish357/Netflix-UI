import React from 'react'
import { BG_URL } from '../utils/constants'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const Search = () => {
    const movies = useSelector(store => store.search.searchResults);
  return (
    <>
        <div className='fixed -z-10'>
            <img 
            className='h-screen w-screen object-cover'
            src={BG_URL} alt="bg-image" />
        </div>
        <div>
            <SearchBar />
            {movies &&
            <MovieList title={"Search Results"} movies={movies}/>
            }
        </div>
    </>
  )
}

export default Search