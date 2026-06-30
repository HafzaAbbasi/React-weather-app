import api from "./baseUrl";

export const fetchWeatherByCity = async (city) => {
  const response = await api.get("/weather", {
    params: {
      q: city,
      appid: import.meta.env.VITE_API_KEY,
      units: "metric",
    },
  });

  return response.data;
};