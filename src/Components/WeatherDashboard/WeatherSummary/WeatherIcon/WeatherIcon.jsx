import { getWeatherIcon } from '../../../../utils/getWeatherIcon'

const WeatherIcon = ({ condition }) => {
  const icon = getWeatherIcon(condition)

  return (
    <div className="flex items-center justify-center my-2">
      <img
        src={icon}
        alt={condition}
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
      />
    </div>
  )
}

export default WeatherIcon