import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <h2>Assignement</h2>
      </div>
      <article>
        <Link to={'/'}>Home</Link>
        <Link to={'/createTask'}>CreateTask</Link>
      </article>
    </nav>
  );
};

export default Header;