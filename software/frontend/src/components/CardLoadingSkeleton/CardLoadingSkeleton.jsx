import React from "react";
import "./cardloadingskeleton.scss";

const CardLoadingSkeleton = () => {
  return (
    <article className="CardLoadingSkeleton">
      <div className="CardLoadingSkeleton__header">
        <h2 className="CardLoadingSkeleton__title"></h2>
        <div className="CardLoadingSkeleton__value"></div>
      </div>
      <div className="CardLoadingSkeleton__progress"></div>
    </article>
  );
};

export { CardLoadingSkeleton };
