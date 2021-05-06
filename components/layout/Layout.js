import styles from '../../styles/Layout.module.css'
import UpperNavbar from './UpperNavbar'
import Header from './Header'
import Banner from './Banner'

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <UpperNavbar />
      <Header />
      <Banner />
      {children}
    </div>
  )
}