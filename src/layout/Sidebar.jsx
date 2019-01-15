import React from "react";
import { Link } from "react-router-dom";

import navList from "../routes/navList";

import "../assets/styles/sidebar.css";

const Sidebar = () => (
  <aside className="menu">
    <p className="menu-label">admin-view</p>
    <ul className="menu-list">
      <li>
        {navList.map(item => (
          <Link key={item.name} to={item.url}>
            <i className={item.iconClass}>{item.iconFont}</i>
            <span>{item.name}</span>
          </Link>
        ))}
      </li>
    </ul>
  </aside>
);

export default Sidebar;
