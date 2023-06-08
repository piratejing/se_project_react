import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/ToggleSwitch.css";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);

  const isChecked = currentTemperatureUnit === "C";

  return (
    <label className="switch">
      <input className="switch__box" type="checkbox" onClick={handleToggleSwitchChange}></input>
      <span className={currentTemperatureUnit === "F" ? "switch__slider-F" : "switch__slider-C"}></span>
      <p className={`switch__temp-F ${currentTemperatureUnit === "F" ? "switch_active" : ""}`}>F</p>
      <p className={`switch__temp-C ${currentTemperatureUnit === "C" ? "switch_active" : ""}`}>C</p>
    </label>
  );
};

export default ToggleSwitch;
