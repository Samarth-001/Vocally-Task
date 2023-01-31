import React from "react";

//styles import
import styles from "../styles/component-styles/navbar.module.css";

//assets import
import logo from "../assets/logo.jpg";
import phone from "../assets/icons/phone.svg";

const Navbar = () => {
  return (
    <>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-info-container"]}>
          <img className={styles["navbar-logo"]} src={logo} alt="" />
        </div>

        <div className={styles["navbar-info-container"]}>
          <div className={styles["navbar-single-info"]}>
            <svg style={{transform:"scale(0.4)"}} stroke="#cfd0d5" fill="#cfd0d5" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z" />
            </svg>
            <p>+769 586 4558</p>
          </div>
          <div className={styles["navbar-single-info"]}>
            <svg style={{transform:"scale(0.4)"}} fill="#cfd0d5" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z" />
            </svg>
            <p>service@openauto.ca</p>
          </div>
          <button className={styles["navbar-single-button"]}>
            Download the mobile app
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;