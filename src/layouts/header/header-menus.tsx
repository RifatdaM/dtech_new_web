import React, { CSSProperties } from "react";

import { Link } from "react-router-dom";
import menu_data from "../../data/menu-data";

const imgStyle: CSSProperties = { width: "100%", height: "auto", objectFit: "cover" };
const HeaderMenus = () => {

  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id} className="has-dropdown">
          <Link to={menu.link}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;


