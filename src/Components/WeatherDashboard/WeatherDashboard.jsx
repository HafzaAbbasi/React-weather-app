import WeatherSummary from './WeatherSummary/WeatherSummary'
import WeatherDetails from './WeatherDetails/WeatherDetails'

const WeatherDashboard = ({ weather, loading, error }) => {

  if (loading) return (
    <p className="text-white text-sm animate-pulse">Fetching weather...</p>
  )

  if (error) return (
    <p className="text-red-300 text-sm">{error}</p>
  )

  if (!weather) return (
    <p className="text-gray-300 text-sm">Search a city to get started</p>
  )

  return (
    <div className="flex flex-col items-center w-full gap-6">
      <WeatherSummary
        condition={weather.weather[0].main}
        temp={weather.main.temp}
        city={weather.name}
      />
      <WeatherDetails
        humidity={weather.main.humidity}
        windSpeed={weather.wind.speed}
      />
    </div>
  )
}

export default WeatherDashboard