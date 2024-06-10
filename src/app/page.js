import Results from '@/components/Results'
import next from 'next'
import React from 'react'

const API_KEY = process.env.API_KEY

export default async function page({searchParams}) {
 
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch (
    `https://api.themoviedb.org/3${genre==='fetchTopRated'?
      `/movie/top_rated`:
      `/trending/all/week`}?api_key=${API_KEY}&langiage=en-US&page=1`,
      {next:{revalidate:10}}
  )

  const data = await res.json()

  if (!res.ok){throw new Error('Failed to fetch data')}

  const results = data.results

  console.log(results)

  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
