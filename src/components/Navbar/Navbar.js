import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { navLinks } from "../../helpers/constants";
import { useDispatch, useSelector } from "react-redux";
import { routeAction } from "../redux/action";

function Navbar() {
  const {route} = useSelector(({routeReducer}) => routeReducer);
  const dispatch = useDispatch();

  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        {navLinks.map((link) => {
          return (
            <li
              key={link.name}
              onClick={() => dispatch(routeAction(link.name))}
            >
              <NavLink
                className={
                  route === link.name
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
