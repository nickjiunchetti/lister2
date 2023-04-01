'use client'

const omdb = require('../../api/omdb')
import { useState } from 'react'

export default function Movie() {
  const [movies, setMovies] = useState([])

  console.log(movies)

  const getMovies = async (text: string) => {
    if (text.length) {
      const movies = await omdb.searchMovies(text)
      if (movies.Search.length) setMovies(movies.Search)
    }
  }
  return (
    <main>
      {!!movies.length &&
        movies.map((movie, index) => {
          return (
            <>
              <span key={index}>{movie.Title}</span>
              <img src={movie.Poster} />
            </>
          )
        })}
      <input onChange={(event) => getMovies(event.target.value)} />
    </main>
  )
}
