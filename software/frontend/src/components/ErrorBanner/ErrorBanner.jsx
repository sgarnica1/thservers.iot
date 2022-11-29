import React from "react";
import "./errorbanner.scss";

const ErrorBanner = ({ error }) => {
  return (
    <article className="ErrorBanner">
      <p className="ErrorBanner__description">
        <strong>Error: </strong> {error}
      </p>
    </article>
  );
};

export { ErrorBanner };
