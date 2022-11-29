import React from "react";
import "./alertbanner.scss";

const AlertBanner = ({ temperature, humidity }) => {
  return (
    <article className="AlertBanner">
      <p className="AlertBanner__description">
        <strong>Alerta: </strong>Se ha superado el límite de temperatura o
        humedad
      </p>
      <div className="AlertBanner__data">
        {temperature && <p>Temperatura: {temperature}° C</p>}
        {humidity && <p>Humedad: {humidity}%</p>}
      </div>
    </article>
  );
};

export { AlertBanner };
