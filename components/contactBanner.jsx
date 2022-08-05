import { useState, useRef } from 'react'
import styles from './contactBanner.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import emailjs from '@emailjs/browser';

import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
  faUser,
  faAt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const ContactBanner = (props) => {
  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [user_phone, setUserPhone] = useState('');
  const [user_message, setUserMessage] = useState('');
  const [popUpMessage, setPopUpMessage] = useState('messagen')

  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nnzg4wp', 'template_14lyxpe', form.current, 'B9aQDwOj4TD7EhHR6')
      .then((result) => {
        console.log(result.text);
        setUserName('')
        setUserEmail('')
        setUserPhone('')
        setUserMessage('')
      }, (error) => {
          console.log(error.text);
      });
  };

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
            name ={'Current location'}
          />
          <InfoWindow onClose={props.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
      <div className={styles.contactForm}>
        <div className={popUpMessage === 'messageOn'
                        ? styles.popUpMessage
                        : `${styles.popUpMessage} ${styles.popUpMessageOff}`}>
          <FontAwesomeIcon
            className={styles.logo}
            icon={faPaperPlane}
          />
          <h4>Message envoyé !</h4>
        </div>
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <div className={styles.nameDiv}>
            <label htmlFor="name">
              <FontAwesomeIcon
                className={styles.logo}
                icon={faUser}
              />
            </label>
            <input
              name="user_name"
              type="text"
              value={user_name}
              placeholder="Prénom / Nom"
              onChange={(e) => setUserName(e.target.value)}
              required
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
              name="user_email"
              type="email"
              value={user_email}
              placeholder="E-mail"
              onChange={(e) => setUserEmail(e.target.value)}
              required
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
              name="user_phone"
              type="phone"
              value={user_phone}
              placeholder="Téléphone"
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </div>
          <div className={styles.messageDiv}>
            <textarea
              name="user_message"
              value={user_message}
              onChange={(e) => setUserMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" value="Send">ENVOYER</button>
        </form>
      </div>
    </section>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})(ContactBanner);