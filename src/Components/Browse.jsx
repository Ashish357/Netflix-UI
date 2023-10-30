import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovie';
import { useSelector } from 'react-redux';
import Search from './Search';

const Browse = () => {

  const showSearch = useSelector(store => store.search.showSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showSearch ?
        <Search />
        : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
      {/*
        Main Container
          -VideoBackground
          -VideoTitle
        SecondaryContainer
          -MovieList * n
          -cards * n
  */}
    </div>
  )
}

export default Browse