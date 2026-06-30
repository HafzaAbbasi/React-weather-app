import { toCelsius } from '../../../../utils/formatTemp'

const TempDisplay = ({ temp, city }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className="text-white text-5xl sm:text-6xl font-light">
        {toCelsius(temp)}
      </h1>
      <p className="text-white text-lg sm:text-xl font-medium">{city}</p>
    </div>
  )
}

export default TempDisplay