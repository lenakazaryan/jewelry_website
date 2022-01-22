import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { navLinks } from "../../helpers/constants";

function Navbar() {
  const [activeTab, setActiveTab] = useState("HOME");
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        {navLinks.map((link) => {
          return (
            <li key={link.name} onClick={() => setActiveTab(link.name)}>
              <NavLink
                className={
                  activeTab === link.name
                    ? styles.navlink_active
                    : styles.navlink
                }
                to={link.to}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
