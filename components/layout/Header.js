import Logo from '../utils/Logo'
import MainNavbar from './MainNavbar'
import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <Logo />
      <MainNavbar />
    </header>
  )
}