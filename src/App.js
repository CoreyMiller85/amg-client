import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <nav
        style={{ display: "flex", width: "100%", justifyContent: "flex-start" }}
      >
        <Link to="/" style={{ marginRight: "1rem" }}>
          AMG Tools
        </Link>
        <Link to="/templates">templates</Link>
      </nav>
      <Outlet />
      <h1>AMG Tools</h1>
      <h3>A Tool box for getting your work done, quicker, and better.</h3>
    </div>
  );
}

export default App;
