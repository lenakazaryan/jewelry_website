import { NavLink } from "react-router-dom";
import { footerLinks } from "../../helpers/constants";
import styles from "./Footer.module.css";
import { useState } from "react";
import fbLogo from "../../assets/images/fb.png";
import linkdinlogo from "../../assets/images/linkdin.png";
import twitterLogo from "../../assets/images/twitter.png";

function Footer() {
  const [activeTab, setActiveTab] = useState("ACC");
  return (
    <div className={styles.footerContainer}>
      <div>
        <p>
          All jewellery pictures are taken from
          <br /> www.goldsmiths.co.uk
        </p>
        <div className={styles.socialNetworkLinks}>
            <img className={styles.socialNetworkLogo} src={fbLogo} />
            <img className={styles.socialNetworkLogo} src={twitterLogo} />
            <img className={styles.socialNetworkLogo} src={linkdinlogo} />
        </div>
      </div>
      <div>
        <p>Useful</p>
        <ul className={styles.footerList}>
          {footerLinks.map((link) => {
            return (
              <li key={link.name} onClick={() => setActiveTab(link.name)}>
                <NavLink
                  className={
                    activeTab === link.name
                      ? styles.footer_active
                      : styles.footerlink
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
      <div>
        <p>Customer photos</p>
      </div>
    </div>
  );
}

export default Footer;
