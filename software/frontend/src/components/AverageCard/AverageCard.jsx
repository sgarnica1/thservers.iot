import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Card } from "../Card/Card";
import "./averagecard.scss";

const AverageCard = ({ title, value, symbol, max, maxValue, minValue }) => {
  return (
    <Card classN="AverageCard" title={title} value={value} symbol={symbol}>
      <ProgressBar
        now={value}
        max={max}
        variant={value / max > 0.8 ? "danger" : "sucess"}
      />
      <div className="AverageCard__maxmin">
        <div className="AverageCard__maxminvalue">
          <strong>Min.</strong>
          <span className="min">
            {minValue}
            {symbol}
          </span>
        </div>
        <div className="AverageCard__maxminvalue">
          <strong>Max.</strong>
          <span className="max">
            {maxValue}
            {symbol}
          </span>
        </div>
      </div>
    </Card>
  );
};

export { AverageCard };
