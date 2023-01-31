import { React } from "react";

//styles import
import styles from "../styles/pages-styles/homepage.module.css";

//images import
import Pickupillustration from "../assets/Pickup_Illustration.png";

const Homepage = () => {
  return (
    <>
      <section>
      <div className={styles["homepage-section-container"]}>
        <div className={styles["homepage-section-text-child"]}>
          <h1>Vehicle Maintenance From the Comfort Of Your Home</h1>
          <p>
            Open Auto soothes the hastle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </p>
          <form className={styles["homepage-section-form"]} action="post">
            <input className={styles["homepage-form-input"]} placeholder="Enter your Name" type="text" />
            <input className={styles["homepage-form-input"]} placeholder="Enter your Email" type="email" />
            <input className={styles["homepage-form-submit-button"]} type="submit" />
          </form>
        </div>
        <div className={styles["homepage-section-image-child"]}>
          <img src={Pickupillustration} alt="Pickupillustration" />
        </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div>Links</div>
        </div>
      </section>

      <hr />

      <section>
        <div></div>
        <div>
          <h1>Focused On Time Saving</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            culpa iure molestias excepturi vitae omnis tempora iste.
            Eius blanditiis, facilis dolores, aliquam suscipit repellendus
            officiis nostrum laborum eaque voluptate illum in deserunt saepe
            dolor sit, corrupti cupiditate natus iusto quibusdam! Minima magnam
            nostrum sint voluptatibus distinctio dolorum aliquid quo voluptatum
            ex est. Ipsam ullam, beatae porro fugiat reiciendis quos dicta
            incidunt animit.
          </p>
          <button>Download the Mobile app</button>
        </div>
      </section>
    </>
  );
};

export default Homepage;
