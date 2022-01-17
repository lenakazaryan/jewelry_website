import { NavLink, Routes, Route } from "react-router-dom";
import { footerLinks } from "../../helpers/constants";
import styles from "./Footer.module.css";
import { useState } from "react";
import fbLogo from "../../assets/images/fb.png";
import linkdinlogo from "../../assets/images/linkdin.png";
import twitterLogo from "../../assets/images/twitter.png";
import { addingInformation } from "../../helpers/constants";

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
      <div className={styles.leftPudding}>
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
        <ul className={`${styles.footerList} ${styles.footerList_lastPart}`}>
          {addingInformation.map((link) => {
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
      <div className={styles.leftPudding}>
        <p>Customer photos</p>
        <div >
          <div>
            <img
              className={styles.costumerPhoto}
              src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/236-newj.jpg?v=1579013167"
            />
            <img
              className={styles.costumerPhoto}
              src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/236-aaaqa-1.jpg?v=1579013167"
            />
            <img
              className={styles.costumerPhoto}
              src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/236-tamarik.jpg?v=1579013167"
            />
            <br />
            <img
              className={styles.costumerPhoto}
              src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/236-236-alve-odonnell-651471-unsplash-1.jpg?v=1579013167"
            />
            <img
              className={styles.costumerPhoto}
              src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/236-newjj.jpg?v=1579013167"
            />
            <img
              className={styles.costumerPhoto}
              src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/236-236-alve-odonnell-607084-unsplash-1.jpg?v=1579013167"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
