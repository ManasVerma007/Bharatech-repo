import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  const username = localStorage.getItem("Username");
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              localStorage.removeItem("Username");
              navigate("/login");
            }}
          >
            Logout
          </li>
        </ul>
      </div>
      <div className="content">
        <h1> Hello, Welcome {username}</h1>
        <div className="message">Chatting feature will be added shortly!</div>
        <div className="message">Stay Tuned!</div>
      </div>
    </div>
  );
}
