import styles from '../../styles/UpperNavbar.module.css'

import UpperNavLinks from '../utils/UpperNavLinks'
import UpperNavIcons from '../utils/UpperNavIcons'

export default function UpperNavbar() {
  return (
    <section className={styles.container}>
      <UpperNavLinks />
      <UpperNavIcons />
    </section>
  )
}