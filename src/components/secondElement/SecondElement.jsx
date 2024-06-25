import React from "react";
import styles from "./styles.module.css";

const SecondElement = () => {
  return (
    <>
      <div className={styles.area}>
        <div className={styles.quote}>"Impressive Stats</div>
        <div className={styles.card}>
          <div className={styles.innerCard}>
            <div className={styles.cardOne}>
              <h1>252</h1>
              <p>No. of Students</p>
            </div>
          </div>

          <div className={styles.innerCard}>
            <div className={styles.cardTwo}>
              <div>
                <h1>112</h1>
                <p>Hiring Partner</p>
              </div>
            </div>
          </div>

          <div className={styles.innerCard}>
            <div className={styles.cardThree}>
              <div>
                <h1>10L</h1>
                <p>Average Salary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondElement;
