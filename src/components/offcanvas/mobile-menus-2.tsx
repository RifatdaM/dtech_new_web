import React from "react";
import { Link } from "react-router-dom";
import { mobile_menu_data } from "../../data/menu-data";

export default function MobileMenusTwo() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu) => (
          <li key={menu.id} className={menu.dropdown_menus ? "has-dropdown" : ""}>
            {menu.dropdown_menus ? (
              // Menu with dropdown
              <a className="pointer">
                {menu.title}
                <button
                  className="dropdown-toggle-btn"
                  onClick={() => openMobileMenu(menu.title)}
                >
                  <i className="fa-light fa-plus"></i>
                </button>
              </a>
            ) : (
              // Menu without dropdown
              <Link to={menu.link} className="pointer">
                {menu.title}
              </Link>
            )}
            {menu.dropdown_menus && (
              <ul
                className="tp-submenu submenu"
                style={{ display: navTitle === menu.title ? "block" : "none" }}
              >
                {menu.dropdown_menus.map((dm, i) => (
                  <li key={i}>
                    <Link to={dm.link}>{dm.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
