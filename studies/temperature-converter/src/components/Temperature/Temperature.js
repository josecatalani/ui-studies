import { useState } from "react";
import TemperatureBox from "../TemperatureBox";

const defaultState = {
  celsiusTemp: 0,
  fahrenheitTemp: 0,
};

function Temperature() {
  const [state, setState] = useState(defaultState);

  const isNumeric = (string) => /^-?\d*\.?\d*$/.test(string);
  const calculateCelsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;
  const calculteFahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;
  const singleStateUpdate = (label, update) => {
    setState({
      ...state,
      [label === "Celsius" ? "celsiusTemp" : "fahrenheitTemp"]: update,
    });
  }

  const onChange = (label, value) => {
    if (!isNumeric(value)) {
      return;
    } else if (value === "-" || value === "") {
      singleStateUpdate(label, value);
    } else {
      setState(
        label === "Celsius"
          ? {
              celsiusTemp: value,
              fahrenheitTemp: calculateCelsiusToFahrenheit(value).toFixed(1),
            }
          : {
              fahrenheitTemp: value,
              celsiusTemp: calculteFahrenheitToCelsius(value).toFixed(1),
            }
      );
    }
  };

  return (
    <div id="temperature-box-wrapper">
      <TemperatureBox
        label="Celsius"
        value={state.celsiusTemp}
        onChange={onChange}
      />
      <TemperatureBox
        label="Fahrenheit"
        value={state.fahrenheitTemp}
        onChange={onChange}
      />
    </div>
  );
}

export default Temperature;
