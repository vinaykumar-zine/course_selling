import React from "react";
import styles from "./styles.module.css";

const Form = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.leftChild}>
          <h1>Contact Us</h1>
        <p>
          If you have any inquiries or need further information,
          <br /> please don't hesitate to get in touch. Our dedicated team
          <br /> is ready to help you on your path to tech excellence.
        </p>
        </div>
        
      </div>
      <div className={styles.right}>
        <form action="submit">
          <label>
            Name
            <input
              type="text"
              placeholder="Enter your Name"
              required
            />
          </label>
          <label>
          Email Address
            <input
              type="email"
              placeholder="Enter your Email"
              required
            />
          </label>
          <label>
          Phone Number
            <input
              type="text"
              placeholder="Enter Phone Number"
              required
            />
          </label>
          <label>
            Message
            <textarea
              placeholder="Enter your query"
              required
              rows="4"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
