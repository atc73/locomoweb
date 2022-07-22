import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './services.module.scss'

import {
  faHandshake,
  faMaximize,
  faServer,
  faHouseCircleCheck,
  faListOl,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";



const services = () => {
  return (
    <section className={styles.services}>
          <div className={styles.title}>
            <h1>Nos Services</h1>
            <p>Des préstations adaptées à vos besoins</p>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.leftColumn}>
              <div className={styles.card}>
                <div className={styles.cardContainer}>
                <div className={styles.logoPart}>
                    <FontAwesomeIcon
                      className={styles.logo}
                      icon={faHandshake}
                    />
                  </div>
                  <div className={styles.textPart}>
                    <h3>Rendez-vous en personne</h3>
                    <p>Pour mieux vous accompagner dans vos projets numériques nous assurons des rendez-vous en personne afin de comprendre de façon précise vos besoins et vos attentes</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardContainer}>
                <div className={styles.logoPart}>
                    <FontAwesomeIcon
                      className={styles.logo}
                      icon={faServer}
                    />
                  </div>
                  <div className={styles.textPart}>
                    <h3>Dernières technologies</h3>
                    <p>Nous utilisons les dernières technologies en matière de dévelopement web afin de fournir à votre site internet un maximum de sécurité et de polyvalence.</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardContainer}>
                <div className={styles.logoPart}>
                    <FontAwesomeIcon
                      className={styles.logo}
                      icon={faHouseCircleCheck}
                    />
                  </div>
                  <div className={styles.textPart}>
                    <h3>Une identité unique</h3>
                    <p>Nous créons des sites internet sur mesure, en fonction de l&apos;identité propre du client : couleurs, images, police etc.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.card}>
                <div className={styles.cardContainer}>
                  <div className={styles.logoPart}>
                    <FontAwesomeIcon
                      className={styles.logo}
                      icon={faMaximize}
                    />
                  </div>
                  <div className={styles.textPart}>
                    <h3>Design responsive</h3>
                    <p>Nous créons votre site pour tous les types de support : téléphone, tablettes, ordinateurs portables, écrans de bureau.</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardContainer}>
                <div className={styles.logoPart}>
                    <FontAwesomeIcon
                      className={styles.logo}
                      icon={faListOl}
                    />
                  </div>
                  <div className={styles.textPart}>
                    <h3>Référencement naturel</h3>
                    <p>Grâce à notre expertise en référencement naturel, apparaissez dans les premiers des résultats de recherche, un atout majeur fâce à la concurrence</p>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardContainer}>
                <div className={styles.logoPart}>
                    <FontAwesomeIcon
                      className={styles.logo}
                      icon={faScrewdriverWrench}
                    />
                  </div>
                  <div className={styles.textPart}>
                    <h3>Assistance continue</h3>
                    <p>Nous restons à vos côtés pour toute intervention immédiate sur vote site : modification de contenu, changements d&apos;images ou de textes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default services
