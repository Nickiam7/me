import Link from 'next/link'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/">
            <a className={[styles.logo, styles.logoorder].join(' ')}>NM</a>
          </Link>
          <span className={styles.navspacer} aria-hidden="true"></span>
          <Link href="/about">
            <a
              className={[styles.nav__item, styles.aboutorder].join(' ')}
            >
              About
            </a>
          </Link>
          <Link href="/work">
            <a
              className={[styles.nav__item, styles.workorder].join(' ')}
            >
              Work
            </a>
          </Link>
          <Link href="/blog">
            <a className={styles.nav__item}>Blog</a>
          </Link>
          <Link href="/contact">
            <a className={styles.nav__item}>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default MainNavigation
