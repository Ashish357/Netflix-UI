import React from 'react'
import MovieCard from './MovieCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MovieList = ({ title, movies }) => {

  if(!movies) return null;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5
    },
    mobile: {
      breakpoint: { max: 464, min: 320 },
      items: 2.5
    },
    smallMobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1.5
    }
  };

  return (
    <div className='w-full px-6 py-4'>
      <h1 className='text-lg md:text-3xl text-white py-4'>{title}</h1>
      {/* <Slider {...settings} className='pr-4'> */}
        {/* <div className='flex'>
          <div className='flex'> */}
          <Carousel responsive={responsive}>
            {movies && movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
            </Carousel>
          {/* </div>
        </div> */}
      {/* </Slider> */}
    </div>
  )
}

export default MovieList