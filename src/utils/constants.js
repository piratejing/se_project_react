import sunnyDay from "../images/day/sunny.png";
import cloudyDay from "../images/day/cloudy.png";
import rainDay from "../images/day/rain.png";
import stormDay from "../images/day/storm.png";
import snowDay from "../images/day/snow.png";
import fogDay from "../images/day/fog.png";
import sunnyNight from "../images/night/sunny.png";
import cloudyNight from "../images/night/cloudy.png";
import rainNight from "../images/night/rain.png";
import stormNight from "../images/night/storm.png";
import snowNight from "../images/night/snow.png";
import fogNight from "../images/night/fog.png";

const latitude = 45.485168;
const longitude = -122.804489;

const ApiKey = "428e15f66fd95028ada95b6b6f1555d4";

export const dayWeatherCards = {
  sunny: sunnyDay,
  cloudy: cloudyDay,
  rain: rainDay,
  storm: stormDay,
  snow: snowDay,
  fog: fogDay,
};

export const nightWeatherCards = {
  sunny: sunnyNight,
  cloudy: cloudyNight,
  rain: rainNight,
  storm: stormNight,
  snow: snowNight,
  fog: fogNight,
};

export { latitude, longitude, ApiKey };
