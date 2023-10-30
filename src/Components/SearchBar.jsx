import React, { useRef } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchResults } from '../utils/searchSlice';
import lang from '../utils/languageConstant';

const SearchBar = () => {
    const searchText = useRef('');
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(searchText.current.value);
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&page=1`,API_OPTIONS)
        const json = await data.json();
        // console.log(json);
        dispatch(addSearchResults(json?.results));
    }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form
        onSubmit={(e) => handleSubmit(e)}
        className='w-5/6 md:w-1/2 bg-black grid grid-cols-12'
        >
            <input 
            ref={searchText}
            className='col-span-9 p-1 md:p-4 m-4'
            type="text" 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button 
            className='max-sm:text-sm col-span-3 px-2 md:px-4 py-2 mx-1 my-4 md:m-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default SearchBar