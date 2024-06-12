import Image from 'next/image'
import React from 'react'

export default async function MoviePage({params}) {

        const movieId = params.id
        const res = await fetch( `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
        )

        const movie = await res.json()
        console.log(res)

  return (
    <div className='w-full'>
      <div className=''>
            <Image src={`https://image.tmdb.org/t/p/original/${
        movie.backdrop_path || movie.poster_path
      }`}
      width={500} height = {300} className='rounded-lg'></Image>
      <div className=''>
        <h2 className='text-lg mb-3 font-bold'>{movie.title|| movie.name}</h2>
        <p className='text-lg mb-3'>{movie.overview}</p>
        <p className='mb-3'> <span className='font-semibold mr-1'>Date released: </span> {movie.release_date}</p>
        <p> <span className='font-semibold mr-1'>Rating:</span> {movie.vote_count}</p>
      </div>
      </div>
    </div>
  )
}
