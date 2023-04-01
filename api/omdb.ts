export const searchMovies = (text: string) => {
  return fetch(
    `http://www.omdbapi.com/?i=tt3896198&s=${text + '&apikey=7c2f1c67'}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}
