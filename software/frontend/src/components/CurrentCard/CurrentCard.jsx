import { useState, useEffect } from "react";
import { config } from "../../config/config";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Card } from "../Card/Card";
import "./currentcard.scss";

const CurrentCard = ({ title, description, value, symbol, params, id }) => {
  const [maxValue, setMaxValue] = useState(params[id]);
  const [fetchData, setFetchData] = useState(false);

  const onAdd = (event) => {
    setFetchData(true);
    setMaxValue((prev) => prev + 1);
    params[id] = maxValue + 1;
  };

  const onSubtract = (event) => {
    setFetchData(true);
    setMaxValue((prev) => prev - 1);
    params[id] = maxValue - 1;
  };

  useEffect(() => {
    const fetchUrl = `${config.BASE_API_URL}/data/params`;
    function handleResize() {
      setFetchData(false);
      fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          maxTemp: params.maxTemp,
          minTemp: params.minTemp,
          maxHum: params.maxHum,
          minHum: params.minHum,
        }),
      })
        .then((res) => {
          console.log(res);
          res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (fetchData) handleResize();
  }, [maxValue]);

  return (
    <Card classN="CurrentCard" title={title} value={value} symbol={symbol}>
      <ProgressBar
        now={value}
        max={params[id]}
        variant={value / params[id] > 0.8 ? "danger" : "sucess"}
      />
      <div className="CurrentCard__maxlimit">
        <p className="CurrentCard__maxlimit-description">{description}</p>
        <form action="" className="CurrentCard__maxlimit-form">
          <button type="button" className="minus-button" onClick={onSubtract}>
            -
          </button>
          <p className="input">
            {maxValue}
            {symbol}
          </p>
          <button type="button" className="plus-button" onClick={onAdd}>
            +
          </button>
        </form>
      </div>
    </Card>
  );
};

export { CurrentCard };
