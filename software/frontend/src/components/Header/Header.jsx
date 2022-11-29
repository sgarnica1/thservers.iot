import React from "react";
import "./header.scss";

const Header = ({ children }) => {
  return <header className="Header">{children}</header>;
};

export { Header };
