import "./FormIMC.css";

import Button from "./Button";

import { useState } from "react";

const FormIMC = ({ calcIMC }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/, "");
  };

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  return (
    <div id="form-container">
      <h2>Calculadora de IMC</h2>

      <form id="form-imc">
        <div className="form-input">
          <label htmlFor="height">Altura:</label>
          <input
            type="text"
            name="height"
            id="height"
            placeholder="Exemplo: 1,75"
            onChange={(e) => handleHeightChange(e)}
            value={height}
          />
        </div>

        <div className="form-input">
          <label htmlFor="weight">Peso:</label>
          <input
            type="text"
            name="weight"
            id="weight"
            placeholder="Exemplo: 80,5"
            onChange={(e) => handleWeightChange(e)}
            value={weight}
          />
        </div>
        <div id="form-buttons">
          <Button
            id="submit-btn"
            text="calcular"
            action={(e) => calcIMC(e, height, weight)}
          />
          <Button id="reset-btn" text="limpar" action={resetForm} />
        </div>
      </form>
    </div>
  );
};

export default FormIMC;
