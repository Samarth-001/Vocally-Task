import React from "react";

//components import
import Links from "./links.js";

//styles import
import styles from "../styles/component-styles/footer.module.css";

//assets import
import logo from "../assets/logo.jpg";
import phone from "../assets/icons/phone.png";
import mail from "../assets/icons/mail.png";

const Footer = () => {
  return (
    <>
      <section className={styles["footer-section"]}>
        <div className={styles["footer-info-container"]}>
          <img className={styles["footer-logo"]} src={logo} alt="" />
          <div className={styles["footer-info"]}>
            <div className={styles["footer-single-info"]}>
              <img className={styles["footer-image"]} src={phone} alt="" />
              <p>+769 586 4558</p>
            </div>
            <div className={styles["footer-single-info"]}>
              <img className={styles["footer-image"]} src={mail} alt="" />
              <p>service@openauto.ca</p>
            </div>
          </div>
        </div>

        <div className={styles["footer-info-container"]}>
          <p>Open Auto all rights reserved</p>
          <div className={styles["footer-policies"]}>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Cookie Policy</p>
          </div>
          <div className={styles["footer-links"]}>
            <Links />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
