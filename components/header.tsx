import headerStyles from './header.module.scss'
import Link from "next/link"

const Header = () => {
  return (
    <main className={headerStyles.mainContainer}>
      <div className={headerStyles.leftLogoDiv}>
        <h1>Locomoweb</h1>
      </div>
      <div className={headerStyles.menuLargeScreen}>
        <ul>
          <li><Link href='#home'>Home</Link></li>
          <li><Link href='#Pricing'>Pricing</Link></li>
          <li><Link href='#Contact'>Contact</Link></li>
        </ul>
      </div>
      <div className={headerStyles.menuSmallScreen}>
        <div className={headerStyles.checkbox}></div>
        <div className={headerStyles.hamburgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </main>
  )
}

export default Header