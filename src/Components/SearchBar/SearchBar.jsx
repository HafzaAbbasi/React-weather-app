import searchIcon from '../../assets/icons/search.png'
import useSearch from '../../hooks/useSearch'

const SearchBar = ({ onSearch }) => {
  const { city, handleChange, handleSearch, handleKeyDown } = useSearch(onSearch)

  return (
    <div className="flex items-center w-full gap-2">
      <input
        type="text"
        value={city}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        className="flex-1 bg-white rounded-full px-4 py-2 text-gray-600 outline-none text-sm"
      />
      <button
        onClick={handleSearch}
        className="bg-white hover:bg-gray-200 p-2 rounded-full"
      >
        <img src={searchIcon} alt="search" className="w-5 h-5" />
      </button>
    </div>
  )
}

export default SearchBar