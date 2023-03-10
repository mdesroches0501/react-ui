import React from "react"
import styles from "./css/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a
            href='https://www.linkedin.com/in/desrochesmichael/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://github.com/mdesroches0501'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
