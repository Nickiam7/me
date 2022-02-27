import { useEffect, useRef } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  })

  const router = useRouter()

  const current_page = (path) => {
    return router.pathname == path ? styles.active : ''
  }

  const handleScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.current.classList.add('shadow')
      header.current.classList.remove('shadow--none')
    } else {
      header.current.classList.add('shadow--none')
      header.current.classList.remove('shadow')
    }
  }

  const header = useRef()

  return (
    <>
      <div className="visually-hidden-focusable overflow-hidden">
        <div className="container">
          <Link href="/#content">Skip to main content</Link>
        </div>
      </div>
      <header ref={header} className={styles.header}>
        <div className="container">
          <nav
            className={styles.nav}
            aria-label="Main navigation"
          >
            <Link href="/">
              <a
                className={[styles.logo, styles.logoorder].join(' ')}
                aria-label="Nick McNeany Logo"
              >
                NM
              </a>
            </Link>
            <span className={styles.navspacer} aria-hidden="true"></span>
            <Link href="/about" >
              <a
                className={
                  [
                    styles.nav__item,
                    styles.aboutorder,
                    current_page('/about')
                  ].join(' ')
                }
              >
                About
              </a>
            </Link>
            <Link href="/work">
              <a
                className={
                  [
                    styles.nav__item,
                    styles.workorder,
                    current_page('/work')
                  ].join(' ')
                }
              >
                Work
              </a>
            </Link>
            <Link href="/blog">
              <a
                className={
                  [
                    styles.nav__item,
                    current_page('/blog')
                  ].join(' ')
                }
              >
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  [
                    styles.nav__item,
                    current_page('/contact')
                  ].join(' ')
                }
              >
                Contact
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default MainNavigation
