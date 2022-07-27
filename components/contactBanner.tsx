import { useState } from 'react'
import styles from './contactBanner.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
  faUser,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const ContactBanner = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  

  function handleSubmit(event) {
    event.preventDefault();
    console.log('name:', name);
    console.log('email:', email);
    console.log('message:', message);
  }

  return (
    <section className={styles.mainContainer}>
      <div className={styles.locomowebDetails}>
        <div className={styles.card}>
          <div className={styles.logoPart}>
            <FontAwesomeIcon
              className={styles.logo}
              icon={faLocationDot}
            />
          </div>
          <div className={styles.textPart}>
            <h3>ADRESSE</h3>
            <p>38 rue des écoles, 74100 Ambilly</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.logoPart}>
            <FontAwesomeIcon
              className={styles.logo}
              icon={faPhone}
            />
          </div>
          <div className={styles.textPart}>
            <h3>TÉLÉPHONE</h3>
            <p>06.12.58.95.77</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.logoPart}>
            <FontAwesomeIcon
              className={styles.logo}
              icon={faEnvelope}
            />
          </div>
          <div className={styles.textPart}>
            <h3>EMAIL</h3>
            <p>contact@locomoweb.com</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.logoPart}>
            <FontAwesomeIcon
              className={styles.logo}
              icon={faClock}
            />
          </div>
          <div className={styles.textPart}>
            <h3>HORAIRES</h3>
            <p>Lundi - Samedi<br />9H00 - 20H00</p>
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <Map
          className={styles.map}
          google={props.google}
          initialCenter={{
            lat: 46.1952,
            lng: 6.2243,
          }}
          zoom={13}
        >
          <Marker
            onClick={props.onMarkerClick}
            name={'Current location'}
          />
          <InfoWindow onClose={props.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
      <div className={styles.contactForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameDiv}>
            <label htmlFor="name">
              <FontAwesomeIcon
                className={styles.logo}
                icon={faUser}
              />
            </label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Prénom / Nom"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.emailDiv}>
            <label htmlFor="email">
              <FontAwesomeIcon
                className={styles.logo}
                icon={faAt}
              />
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.phoneDiv}>
            <label htmlFor="phone">
              <FontAwesomeIcon
                className={styles.logo}
                icon={faPhone}
              />
            </label>
            <input
              id="phone"
              type="phone"
              value={phone}
              placeholder="Téléphone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.messageDiv}>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">ENVOYER</button>
        </form>
      </div>
    </section>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANhk1Ljy91hOdfbgyVzhYaOpSXRQO-Ejg',
})(ContactBanner);