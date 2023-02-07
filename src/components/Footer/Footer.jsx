import React from 'react';
import styles from './Footer.module.scss';

const Footer = (props) => {

  return (
    <div className={styles.footer}>
      <div className={styles.footer__copyright}>&#169; AutoDrive</div>
      <div>
        <a className={styles.footer__tel} href="tel:+380672300954">
          Тел.: +380672300954
        </a>
      </div>
      <div className={styles.footer__copyright}>
        <a className={styles.footer__tel} href="https://github.com/yuriipopsui/AutoDrive">
          Project on GitHub
        </a>
      </div>
      <div className={styles.footer__copyright}>

        <a className={styles.footer__tel} href="https://github.com/MaxPopsuy">
          API for project: GitHub
        </a>
      </div>

    </div>
  )
}
export default Footer;