import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function toggleChilds(e, item) {
  e.preventDefault();
  if (item.childs !== undefined) {
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

const SideBarItem = props => {
  const { item } = props;
  const { url, name, iconClass, iconFont, childs } = item;

  if (childs !== undefined && childs.length > 0) {
    return (
      <React.Fragment>
        <Link to={url} title={name} onClick={e => toggleChilds(e, item)}>
          <i className={iconClass}>{iconFont}</i>
          <span>{name}</span>
          <i className="material-icons">keyboard_arrow_right</i>
        </Link>
        <ul>
          {childs.map(child => (
            <li key={child.name}>
              <Link to={child.url}>{child.name}</Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  return (
    <Link to={url} title={name}>
      <i className={iconClass}>{iconFont}</i>
      <span>{name}</span>
    </Link>
  );
};

SideBarItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    childs: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ),
    iconClass: PropTypes.string.isRequired,
    iconFont: PropTypes.string.isRequired
  }).isRequired
};

export default SideBarItem;
