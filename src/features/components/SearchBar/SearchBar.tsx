"use client"
import { Typography } from "@/shared/components/Typography/Typography"
import { useState } from "react"

const moviesTitle = [
  {id: 1, title: 'Homem-Aranha'},
  {id: 2, title: 'Batman'},
  {id: 3, title: 'Harry Potter e a câmara secreta'},
  {id: 4, title: 'A casa monstro'},
  {id: 5, title: 'Esqueceram de mim'},
]

export function SearchBar() {

  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  };

  const filteredMovies = moviesTitle.filter(
    movies => movies.title.toLowerCase().includes(search.toLocaleLowerCase())
  )

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch(input)
    }
  }

  return (
    <div className="">
      <input
        className="bg-white border border-white rounded-[20px] h-10 w-full "
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={input}
        type="search" />

        {search && filteredMovies.length > 0 && (
          <ul>
            {filteredMovies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}

        {search && filteredMovies.length === 0 && (
          <p className="text-red-600">Nenhum filme encontrado :(</p>
        )}
    </div>
  )
} 