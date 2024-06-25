import React from "react";
import styles from "./styles.module.css";

const ThirdElement = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.subMain}>
          <div className={styles.left}>
            <img
              src="https://almnd.in/static/media/medium-shot-people-learning%201.aeb147191b182d3487fd.png"
              alt=""
            />
          </div>
          <div className={styles.right}>
            <div className={styles.subRight}>
              <h1>Experience The Workshop for Free</h1>
              <p>
                Discover the realm of Graphic Design, Manual Testing and Full
                Stack<br/> Development in our free workshop. Join experts as they
                unveil the art<br/> of coding, design, and innovation. Whether you're
                a beginner or an<br/> enthusiast, dive into live demos, real
                projects, and a world of<br/> possibilities. Reserve your spot today,
                next workshop starting on 29th<br/> March 2024, from 9:00AM To
                1:00PM.
              </p>
              <button>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdElement;
