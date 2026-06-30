import WeatherStats from './WeatherStats/WeatherStats'

const WeatherDetails = ({ humidity, windSpeed }) => {
  return (
    <div className="w-full">
      <WeatherStats humidity={humidity} windSpeed={windSpeed} />
    </div>
  )
}

export default WeatherDetails