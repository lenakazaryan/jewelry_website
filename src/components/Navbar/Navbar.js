import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Home from "../Home/Home";
import Acc from "../Acc/Acc";
import Shop from "../Shop/Shop";
import Inspiration from "../Inspiration/Inspiration";
import ContactUs from "../ContactUs/ContactUs";
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acc" element={<Acc />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default Navbar;
