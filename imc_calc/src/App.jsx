import "./App.css";
import { imcData } from "./data/imcData";
import { useState } from "react";

import FormIMC from "./components/FormIMC";
import TableIMC from "./components/TableIMC";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;

    const heightWithDot = height.replace(",", ".");
    const weightWithDot = weight.replace(",", ".");

    const imcResult = (weightWithDot / (heightWithDot * heightWithDot)).toFixed(1);

    setImc(imcResult);

    imcData.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (
    <>
      <div id="container">
        {!imc ? (
          <FormIMC calcIMC={calcImc} />
        ) : (
          <TableIMC
            data={imcData}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
      </div>
    </>
  );
}

export default App;
