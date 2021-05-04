import styles from '../../styles/Layout.module.css'
import UpperNavbar from './UpperNavbar'

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <UpperNavbar />
      {children}
    </div>
  )
}