import Image from 'next/image'
import mypic from '../images/agency.jpg'
import styles from './landingBanner.module.scss'

const landingBanner = () => {
  return (
    <section className={styles.coverImageContainer}>
      <div className={styles.coverImageTextContainer}>
        <h1>Agence Web à Ambilly</h1>
        <p>
          Nouvelle agence web à Ambilly, Locomoweb travaille avec les acteurs et business locaux pour répondre à leurs besoins numériques. Nous créons des sites web modernes, rapides et très bien référencés. 
        </p>
      </div>
      <Image className={styles.coverImage} src={mypic} alt='agency' priority={true} layout='fill' objectFit='cover' />
    </section>
  )
}

export default landingBanner