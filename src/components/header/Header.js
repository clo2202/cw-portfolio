import React from "react";
import * as styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.header__title}>
        <span>Chloe Williams</span>
      </NavLink>
      <nav>
        <ul className={styles.nav_links}>
          <li>
            <NavLink activeClassName={styles.active} to="/" exact>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/work">
              My Work
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
