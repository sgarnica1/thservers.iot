import React from "react";
import { Card } from "../Card/Card";
import "./alertcard.scss";

const AlertCard = ({ value, tempValue, tempSymbol, humValue, humSymbol }) => {
  return (
    <Card classN="AlertCard" title={"Alertas"} value={value} symbol={""}>
      <div className="AlertCard__maxvalues">
        {tempValue && (
          <div className="AlertCard__maxmin-container temp">
            <span className="AlertCard__maxmin-title">Temperatura Max.</span>
            <span className="AlertCard__maxmin-value">
              {tempValue}
              {tempSymbol}
            </span>
          </div>
        )}
        {humValue && (
          <div className="AlertCard__maxmin-container hum">
            <span className="AlertCard__maxmin-title">Humedad Max.</span>
            <span className="AlertCard__maxmin-value">
              {humValue}
              {humSymbol}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export { AlertCard };
