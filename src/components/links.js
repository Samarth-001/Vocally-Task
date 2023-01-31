import React from 'react'

//styles import
import styles from "../styles/component-styles/links.module.css";

//assests import
import facebook from '../assets/icons/facebook.png'
import youtube from '../assets/icons/youtube.png'
import twitter from '../assets/icons/twitter.png'
import linkedin from '../assets/icons/linkedin.png'
import instagram from '../assets/icons/instagram.png'

const Links = () => {
    return (
        <div className={styles["links-container"]}>
           <img className={styles["individual-link"]} src={facebook} alt="" />
           <img className={styles["individual-link"]} src={twitter} alt="" />
           <img className={styles["individual-link"]} src={youtube} alt="" />
           <img className={styles["individual-link"]} src={linkedin} alt="" />
           <img className={styles["individual-link"]} src={instagram} alt="" />
        </div>
    )
}

export default Links