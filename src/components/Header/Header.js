import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <img
        className={styles.logo}
        src="https://static.ucraft.net/fs/ucraft/userFiles/preview-acc/images/logo.png?v=1579013171"
      />
    </div>
  );
}

export default Header;
