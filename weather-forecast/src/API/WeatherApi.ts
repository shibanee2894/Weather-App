import axios from 'axios';

interface WeatherForecast {
  name: string;
  main: {
    temp: number;
  };
  weather: [
    {
      description: string;
    }
  ];
}

export const fetchWeatherData = async (city: string, apiKey: string): Promise<WeatherForecast> => {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await axios.get<WeatherForecast>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
