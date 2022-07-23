import Image from 'next/image'
import multiScreens from '../images/multi-screens.jpg'
import styles from './responsiveBanner.module.scss'

const responsiveBanner = () => {
  return (
    <section className={styles.parallaxBanner}>
          <Image className={styles.parallaxImage} src={multiScreens} priority={true} alt='agency' layout='fill' objectFit='cover' />
          <div className={styles.parallaxText}>
            <h3>Compatible Mobile, tablettes et PC</h3>
            <h2>Design Responsive</h2>
          </div>
        </section>
  )
}

export default responsiveBanner