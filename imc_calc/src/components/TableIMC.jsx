import Button from "./Button";
import "./TableIMC.css";

const TableIMC = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <div id="table-container">
      <h2 id="imc-number">
        Seu IMC: <span className={infoClass}>{imc}</span>
      </h2>
      <p id="imc-info">
        Situação atual: <span className={infoClass}>{info}</span>
      </p>
      <h3>Confira as classificações</h3>

      <div id="imc-table">
        <div id="table-header">
          <p>IMC</p>
          <p>Classificação</p>
          <p>Obesidade</p>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <Button id="back-btn" text="Voltar" action={resetCalc} />
    </div>
  );
};

export default TableIMC;
