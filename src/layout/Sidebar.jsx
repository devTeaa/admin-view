import React from "react";

import navList from "../routes/navList";

import "../assets/styles/sidebar.css";
import SideBarItem from "../components/SidebarItem";

const Sidebar = () => (
  <aside className="menu">
    <p className="menu-label">admin-view</p>
    <ul className="menu-list">
      {navList.map(item => (
        <li
          key={item.name}
          className="menu-close"
          id={`menu-${item.name}`}
          data-collapse="true"
        >
          <SideBarItem item={item} />
        </li>
      ))}
    </ul>
    <span
      role="button"
      title="Toggle sidebar"
      className="sidebar-burger"
      aria-expanded="false"
    >
      <i className="material-icons">fullscreen_exit</i>
      <span>Hide sidebar</span>
    </span>
  </aside>
);

export default Sidebar;
