import React from "react";
import { Link } from "react-router-dom";

import navList from "../routes/navList";

import "../assets/styles/sidebar.css";

function toggleChild(e, item) {
  e.preventDefault();
  if (item.child !== undefined) {
    const menu = document.getElementById(`menu-${item.name}`);
    const collapse = JSON.parse(menu.dataset.collapse);
    if (collapse) {
      menu.classList.remove("menu-close");
    } else {
      menu.classList.add("menu-close");
    }

    menu.dataset.collapse = !collapse;
  }
}

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
          <Link
            to={item.url}
            onClick={e =>
              item.child !== undefined ? toggleChild(e, item) : false
            }
          >
            <i className={item.iconClass}>{item.iconFont}</i>
            <span>{item.name}</span>
            {item.child !== undefined && item.child.length > 0 ? (
              <i className="material-icons">keyboard_arrow_right</i>
            ) : (
              <React.Fragment />
            )}
          </Link>
          {item.child !== undefined && item.child.length > 0 ? (
            <ul>
              {item.child.map(childItem => (
                <li key={childItem.name}>
                  <Link to={childItem.url}>{childItem.name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <React.Fragment />
          )}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
