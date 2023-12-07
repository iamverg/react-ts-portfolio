import styles from './Progressbar.module.css';

export default function Progressbar({ width }: { width: number }) {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBarTitle}>React</div>
      <div className={styles.progressBar}>
        <div
          className={`${styles.progressBarSkill} ${
            styles['progressBarSkillWidth_' + width]
          }`}
        ></div>
        <span className={styles.progressBarPercentage}>{width}%</span>
      </div>
    </div>
  );
}
