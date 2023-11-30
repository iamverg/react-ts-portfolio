import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Hello, I am <span className={styles.textRed}> Loremum Ipsumen</span>
            . <br />I am a Full-Stack Developer
          </h1>
          <Button name="View my work" />
        </div>
      </div>
    </>
  );
}
