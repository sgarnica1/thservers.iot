import React from "react";
import "./datatable.scss";

const DataTable = ({ headers, data, params }) => {
  return (
    <article className="DataTable">
      <header className="DataTable__header">
        {headers.map((header, index) => {
          return (
            <div className="DataTable__header-value" key={index}>
              {header}
            </div>
          );
        })}
      </header>
      <div className="DataTable__body">
        {data.map((entry, index) => {
          return (
            <div
              className={`DataTable__row ${
                entry.temperature > params.maxTemp ||
                entry.humidity > params.maxHum
                  ? "alarm"
                  : ""
              }`}
              key={index}
            >
              <div className="DataTable__row-value">
                {entry.date.split("GMT")[0]}
              </div>
              <div className="DataTable__row-value">{entry.temperature}° C</div>
              <div className="DataTable__row-value">{entry.humidity}%</div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export { DataTable };
