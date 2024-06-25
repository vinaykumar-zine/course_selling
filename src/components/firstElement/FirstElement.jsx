import React from 'react'
import styles from './styles.module.css'
import { AiOutlineMessage } from "react-icons/ai";
import Cards from '../cards/Cards';

const FirstElement = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <h5><AiOutlineMessage /> Launching Your Career for the Next Sphere</h5>
          <h1>Redefining the Next<br/> Generation of Skill<br/> Development and Career<br/> Launch</h1>
          <p>Experience the Education revolution with Flexible Fees, Dynamic Curriculum and<br/> transformative Experiences for Limitless Growth.</p>
          <button>Enroll Now</button>
        </div>
        <div className={styles.right}>
          <Cards />
        </div>
      </div>
        
    </>
  )
}

export default FirstElement