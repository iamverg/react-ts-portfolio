import styles from './Button.module.css';
export default function Button({ name }: { name: string }) {
  return (
    <>
      <a className={`${styles.button} ${styles.gradientBorder}`} href="#">
        {name}
      </a>
    </>
  );
}
