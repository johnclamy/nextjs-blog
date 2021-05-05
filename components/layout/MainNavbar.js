import MainNavLinks from '../utils/MainNavLinks'
import SearchBar from '../utils/SearchBar'
import styles from '../../styles/MainNavbar.module.css'

export default function MainNavbar() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <MainNavLinks />
        <SearchBar />
      </section>
    </div>
  )
}