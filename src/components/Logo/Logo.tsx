import styles from './Logo.module.css'
import Torus from '../../../public/icons/torus.svg'

const Logo = () => {
  return (
    <div className={styles.logo}>
        <Torus className={styles.icon} /> Chris Ware
        </div>
  )
}
export default Logo