import { React, useState } from "react";
// import { database } from "../backend/firebase.js";

//components import
import Links from "../components/links.js";

//styles import
import styles from "../styles/pages-styles/homepage.module.css";

//images import
import Pickupillustration from "../assets/Pickup_Illustration.png";
import Phone from "../assets/Phone.svg";
import Down from "../assets/icons/Down.jpg";

const Homepage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  //handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = fetch(
      "https://vocally-task-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          name,
          email,
        }),
      }
    );
      
    if(res) {
      alert("Your Credentials have been saved successfully");
    }else{
      alert("Data not stored");
    }
    setName('');
    setEmail('');
    };

    //handles the scroll from image
    const handleClickScroll = () => {
      const element = document.getElementById('scroll');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };


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
            <form className={styles["homepage-section-form"]} action="post" onSubmit={handleSubmit}>
              <input
                className={styles["homepage-form-input"]}
                placeholder="Enter your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={styles["homepage-form-input"]}
                placeholder="Enter your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={styles["homepage-form-submit-button"]}
                type="submit"
              />
            </form>
          </div>
          <div className={styles["homepage-section-image-child"]}>
            <img src={Pickupillustration} alt="Pickupillustration" />
          </div>
        </div>
        <div className={styles["homepage-footer"]}>
          <div></div>
          <div>
           <img src={Down} onClick={handleClickScroll} alt=""/>
          </div>
          <Links />
        </div>
      </section>

      <section id="scroll" className={styles["homepage-second-section-container"]}>
        <div className={styles["homepage-second-section-image-child"]}>
          <img src={Phone} alt="Phone" />
        </div>
        <div className={styles["homepage-second-section-text-child"]}>
          <h1>Focused On Time Saving</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            culpa iure molestias excepturi vitae omnis tempora iste. Eius
            blanditiis, facilis dolores, aliquam suscipit repellendus officiis
            nostrum laborum eaque voluptate illum in deserunt saepe dolor sit,
            corrupti cupiditate nat quibusdam! Minima magnam nostrum
          </p>
          <button>Download the Mobile app</button>
        </div>
      </section>
    </>
  );
};

export default Homepage;
