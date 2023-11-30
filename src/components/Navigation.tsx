import { useEffect, useRef, useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [navigationListOpen, setNavigationListOpen] = useState(false);
  const navigationList = useRef<HTMLUListElement>(null);

  function handleClick() {
    navigationList.current?.classList.toggle(styles.visible);
    setNavigationListOpen((prev) => !prev);
  }

  useEffect(() => {
    if (navigationListOpen) {
      document.querySelector('body')?.classList.add('overflow-hidden');
    } else {
      document.querySelector('body')?.classList.remove('overflow-hidden');
    }
    return () => {
      document.querySelector('body')?.classList.remove('overflow-hidden');
    };
  }, [navigationListOpen]);

  useEffect(() => {
    navigationList.current?.classList.remove(styles.visible);
    setNavigationListOpen(false);
  }, []);
  return (
    <nav className={styles.navigation}>
      <button onClick={handleClick} className={styles.button}>
        HAM
      </button>
      <ul ref={navigationList} className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <a href="#about">About me</a>
        </li>
        <li className={styles.navigationItem}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={styles.navigationItem}>
          <a href="#blog">Blog</a>
        </li>
        <li className={styles.navigationItem}>
          <a href="#contacts">Conctact</a>
        </li>
      </ul>
    </nav>
  );
}
