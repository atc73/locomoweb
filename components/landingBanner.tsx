import Image from 'next/image'
import mypic from '../images/agency.jpg'
import styles from './landingBanner.module.scss'

const landingBanner = () => {
  return (
    <section className={styles.coverImageContainer}>
      <div className={styles.coverImageTextContainer}>
        <h1>Agence Web à Annemasse</h1>
        <p>
          Nouvelle agence web à Annemasse, Locomoweb travaille avec les acteurs et business locaux pour répondre à leurs besoins numériques. Nous créons des sites web modernes, rapides et très bien référencés. 
        </p>
      </div>
      <Image className={styles.coverImage} src={mypic} alt='agency' layout='fill' objectFit='cover' />
    </section>
  )
}

export default landingBanner