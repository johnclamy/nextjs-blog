import styles from '../../styles/Layout.module.css'
import UpperNavbar from './UpperNavbar'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <UpperNavbar />
      <Header />
      {children}
    </div>
  )
}