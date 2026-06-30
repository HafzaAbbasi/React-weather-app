import { useState } from 'react'

const useSearch = (onSearch) => {
  const [city, setCity] = useState('')

  const handleChange = (e) => setCity(e.target.value)

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim())
      setCity('')    
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {handleSearch()}
  }

  return { city, handleChange, handleSearch, handleKeyDown }
}

export default useSearch