import React from "react";
import PropTypes from "prop-types";

import navList from "../routes/navList";

import "../assets/styles/sidebar.css";
import SideBarItem from "../components/SidebarItem";

const Sidebar = props => {
  const { toggleSideBar } = props;
  return (
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
        tabIndex="-1"
        className="sidebar-burger"
        onClick={toggleSideBar}
        onKeyPress={toggleSideBar}
        aria-expanded="false"
      >
        <i className="material-icons">fullscreen_exit</i>
        <span>Hide sidebar</span>
      </span>
    </aside>
  );
};

Sidebar.propTypes = {
  toggleSideBar: PropTypes.func.isRequired
};

export default Sidebar;
