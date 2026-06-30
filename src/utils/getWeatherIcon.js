import sunIcon from '../assets/icons/sun.png'
import cloudIcon from '../assets/icons/cloud.png'
import rainIcon from '../assets/icons/rain.png'
import snowIcon from '../assets/icons/snow.png'

const iconMap = {
  Clear: sunIcon,
  Clouds: cloudIcon,
  Rain: rainIcon,
  Snow: snowIcon,
}

export const getWeatherIcon = (condition) => {
  return iconMap[condition] || sunIcon
}