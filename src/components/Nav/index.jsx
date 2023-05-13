import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
  return (
    <nav className={Styles.nav}>
      <a className={Styles.logolink} href="/">
        <div className={Styles.monogram}>CY</div>
      </a>
      <a className={Styles.link} href="/projects">
        Projets
      </a>
      <a className={Styles.link} href="/experiences">
        Experiences pro
      </a>
      <a className={Styles.social} href="https://github.com/ClementYziquel5">
        <svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a className={Styles.social} href="https://www.linkedin.com/in/clement-yziquel/">
        <svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM5.5 13H3V6h2.5v7zm-1.25-8.5C4.16 4.5 4.8 3.84 5.5 3.84S6.84 4.5 6.84 5.25 6.2 6.66 5.5 6.66 4.16 6 4.16 5.25zm9 8.5h-2.5V9.66c0-.75-.6-1.34-1.34-1.34S7.98 8.91 7.98 9.66V13H5.5V6h2.48v.94c.44-.7 1.3-1.16 2.27-1.16 1.75 0 3.18 1.44 3.18 3.2V13z" />
        </svg>
      </a>
    </nav>
  );
}
export default Nav;
