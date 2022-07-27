import Image from 'next/image'
import styles from './stepsToBuild.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import building from '../images/building.jpg'

import {
  faMugSaucer,
  faListCheck,
  faPenToSquare,
  faCode,
  faKeyboard,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";


const stepsToBuild = () => {
  return (
    <section className={styles.mainContainer}>
      <Image className={styles.stepsToBuildImage} priority={true} src={building} alt='agency' layout='fill' objectFit='cover' />
      <div className={styles.itemsContainer}>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={`${styles.logoPart} ${styles.logoPart1}`}>
              <FontAwesomeIcon
                className={styles.logo}
                icon={faMugSaucer}
              />
            </div>
            <div className={styles.textPart}>
              <h3>CAFÉ</h3>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={`${styles.logoPart} ${styles.logoPart2}`}>
              <FontAwesomeIcon
                className={styles.logo}
                icon={faListCheck}
              />
            </div>
            <div className={styles.textPart}>
              <h3>ANALYSE</h3>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={`${styles.logoPart} ${styles.logoPart3}`}>
              <FontAwesomeIcon
                className={styles.logo}
                icon={faPenToSquare}
              />
            </div>
            <div className={styles.textPart}>
              <h3>DESIGN</h3>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={`${styles.logoPart} ${styles.logoPart4}`}>
              <FontAwesomeIcon
                className={styles.logo}
                icon={faCode}
              />
            </div>
            <div className={styles.textPart}>
              <h3>CODE</h3>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={`${styles.logoPart} ${styles.logoPart5}`}>
              <FontAwesomeIcon
                className={styles.logo}
                icon={faKeyboard}
              />
            </div>
            <div className={styles.textPart}>
              <h3>TESTS</h3>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={`${styles.logoPart} ${styles.logoPart6}`}>
              <FontAwesomeIcon
                className={styles.logo}
                icon={faGlobe}
              />
            </div>
            <div className={styles.textPart}>
              <h3>ONLINE</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default stepsToBuild