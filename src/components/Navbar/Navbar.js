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
        {navLinks.map(link => {
          const {name, to } = link
          return (
            <li
              key={name}
              onClick={() => dispatch(routeAction(name))}
            >
              <NavLink
                className={
                  route === link.name
                    ? styles.navlink_active
                    : styles.navlink
                }
                to={to}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
