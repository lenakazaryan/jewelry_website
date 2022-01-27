import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Bucket from "./Bucket";
import { routeAction } from "../redux/action";
import { navLinks } from "../../helpers/constants";

function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    const M = window.M;
    const modals = document.querySelectorAll(".modal");
    M.Modal.init(modals, {});
  });

  const setHomeRoute = () => {
    dispatch(routeAction(navLinks[0].name));
  };

  return (
    <header className="white">
      <div className="header_top">
        <Link onClick={setHomeRoute} to="/">
          <div className="main_logo_container">
            <img
              src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/logo.png?v=1579013171"
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <Bucket />
    </header>
  );
}

export default Header;
