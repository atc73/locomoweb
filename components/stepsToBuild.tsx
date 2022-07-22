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
      <Image className={styles.stepsToBuildImage} src={building} alt='agency' layout='fill' objectFit='cover' />
      <div className={styles.itemsContainer}>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.logoPart}>
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
            <div className={styles.logoPart}>
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
            <div className={styles.logoPart}>
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
            <div className={styles.logoPart}>
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
            <div className={styles.logoPart}>
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
            <div className={styles.logoPart}>
              <FontAwesomeIcon
                className={styles.logo}
                icon={faGlobe}
              />
            </div>
            <div className={styles.textPart}>
              <h3>MISE EN LIGNE</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default stepsToBuild