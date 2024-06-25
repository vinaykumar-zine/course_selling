import React from 'react';
import styles from './styles.module.css';

const Cards = () => {
  return (
    <div className={styles.Cards}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src="https://almnd.in/static/media/full-stack-dev-img(new).f628e909a5be3a5095ab.png" alt="full-stack-development" />
        </div>
        <div>
          <h2>Full-Stack Development<br />Course</h2>
        </div>
        <div className={styles.mode}>
          <div className={styles.online}><p>Online</p></div>
          <div className={styles.offline}><p>Offline</p></div>
          <div className={styles.month}><p>4 Months</p></div>
        </div>
        <div><button>View Details</button></div>
      </div>
     
     
      <div className={styles.card}>
        <div className={styles.image}>
          <img src="https://almnd.in/static/media/Front-end-dev-img.7e8b7b2c618b3935a302.png" alt="full-stack-development" />
        </div>
        <div>
          <h2>Front-End Development
          <br />Course</h2>
        </div>
        <div className={styles.mode}>
          <div className={styles.online}><p>Online</p></div>
          <div className={styles.offline}><p>Offline</p></div>
          <div className={styles.month}><p>4 Months</p></div>
        </div>
        <div><button>View Details</button></div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src="https://almnd.in/static/media/full-stack-dev-img(new).f628e909a5be3a5095ab.png" alt="full-stack-development" />
        </div>
        <div>
          <h2>Back-End Development
<br />Course</h2>
        </div>
        <div className={styles.mode}>
          <div className={styles.online}><p>Online</p></div>
          <div className={styles.offline}><p>Offline</p></div>
          <div className={styles.month}><p>4 Months</p></div>
        </div>
        <div><button>View Details</button></div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src="https://almnd.in/static/media/Front-end-dev-img.7e8b7b2c618b3935a302.png" alt="full-stack-development" />
        </div>
        <div>
          <h2>Mobile App Development<br />Course</h2>
        </div>
        <div className={styles.mode}>
          <div className={styles.online}><p>Online</p></div>
          <div className={styles.offline}><p>Offline</p></div>
          <div className={styles.month}><p>4 Months</p></div>
        </div>
        <div><button>View Details</button></div>
      </div>
    </div>
  );
};

export default Cards;
