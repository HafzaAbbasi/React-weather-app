import humidityIcon from '../../../../assets/icons/humidity.png'
import windIcon from '../../../../assets/icons/wind.png'

const WeatherStats = ({ humidity, windSpeed }) => {
  return (
    <div className="flex justify-between w-full mt-2 px-2">
      <div className="flex items-center gap-2">
        <img src={humidityIcon} alt="humidity" className="w-6 h-6" />
        <div>
          <p className="text-white font-semibold text-xs sm:text-sm">
            {humidity} %
          </p>
          <p className="text-gray-300 text-xs">Humidity</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src={windIcon} alt="wind" className="w-6 h-6" />
        <div>
          <p className="text-white font-semibold text-xs sm:text-sm">
            {windSpeed} Km/h
          </p>
          <p className="text-gray-300 text-xs">Wind Speed</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherStats