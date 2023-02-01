import React from "react";

//styles import
import styles from "../styles/component-styles/navbar.module.css";

//assets import
import logo from "../assets/logo.jpg";
import phone from "../assets/icons/phone.png";
import mail from "../assets/icons/mail.png";

const Navbar = () => {
  return (
    <>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-info-container"]}>
          <img className={styles["navbar-logo"]} src={logo} alt="" />
        </div>

        <div className={styles["navbar-info-container"]}>
          <div className={styles["navbar-single-info"]}>
            <img className={styles["navbar-image"]} src={phone} alt="" />
            <p className={styles["navbar-text"]}>+769 586 4558</p>
          </div>
          <div className={styles["navbar-single-info"]}>
          <img className={styles["navbar-image"]} src={mail} alt="" />
            <p className={styles["navbar-text"]}>service@openauto.ca</p>
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
