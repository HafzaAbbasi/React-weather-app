import SearchBar from './Components/SearchBar/SearchBar'
import WeatherDashboard from './Components/WeatherDashboard/WeatherDashboard'
import useWeather from './hooks/useWeather'

const App = () => {
  const { weather, loading, error, getWeather } = useWeather()

  return (
    <div className="min-h-screen bg-purple-200 flex items-center justify-center p-4">
      <div className="bg-linear-to-tr from-blue-500 to-indigo-700 rounded-3xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm flex flex-col items-center gap-6 shadow-2xl">
        <SearchBar onSearch={getWeather} />
        <WeatherDashboard
          weather={weather}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default App