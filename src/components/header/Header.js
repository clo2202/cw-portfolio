import React from "react";
import * as styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.header__title}>
        <span>Chloe Williams</span>
      </a>
      <nav>
        <ul className={styles.nav_links}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
