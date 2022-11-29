import React from "react";
import "./card.scss";

const Card = ({ classN, title, value, symbol, children }) => {
  return (
    <article className={`Card ${classN}`}>
      <div className="Card__header">
        <h2 className="Card__title">{title}</h2>
        <span className="Card__value">
          {value}
          {symbol}
        </span>
      </div>
      {children}
    </article>
  );
};

export { Card };
