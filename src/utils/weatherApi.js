import { latitude, longitude, APIkey } from "./constants";
import { weatherDayCards, weatherNightCards } from "./constants";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForecastWeather = () => {
  const weatherApi = fetch(` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`).then(
    processServerResponse
  );
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const getWeatherCard = (data) => {
  const isDaytime = Date.now() / 1000 > data.sys.sunrise && Date.now() / 1000 < data.sys.sunset;
  const weather = data.weather[0].id;

  if (isDaytime) {
    if (weather >= 800 && weather <= 801) {
      return weatherDayCards.sunny;
    } else if (weather >= 802 && weather <= 804) {
      return weatherDayCards.cloudy;
    } else if (weather >= 701 && weather <= 781) {
      return weatherDayCards.fog;
    } else if (weather >= 600 && weather <= 622) {
      return weatherDayCards.snow;
    } else if ((weather >= 500 && weather <= 531) || (weather >= 300 && weather <= 321)) {
      return weatherDayCards.rain;
    } else if (weather >= 200 && weather <= 232) {
      return weatherDayCards.storm;
    }
  } else {
    if (weather >= 800 && weather <= 801) {
      return weatherNightCards.sunny;
    } else if (weather >= 802 && weather <= 804) {
      return weatherNightCards.cloudy;
    } else if (weather >= 701 && weather <= 781) {
      return weatherNightCards.fog;
    } else if (weather >= 600 && weather <= 622) {
      return weatherNightCards.snow;
    } else if ((weather >= 500 && weather <= 531) || (weather >= 300 && weather <= 321)) {
      return weatherNightCards.rain;
    } else if (weather >= 200 && weather <= 232) {
      return weatherNightCards.storm;
    }
  }
};
