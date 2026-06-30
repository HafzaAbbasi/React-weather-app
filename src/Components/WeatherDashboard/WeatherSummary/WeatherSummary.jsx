import WeatherIcon from './WeatherIcon/WeatherIcon'
import TempDisplay from './TempDisplay/TempDisplay'

const WeatherSummary = ({ condition, temp, city }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <WeatherIcon condition={condition} />
      <TempDisplay temp={temp} city={city} />
    </div>
  )
}

export default WeatherSummary