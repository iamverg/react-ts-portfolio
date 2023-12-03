import styles from './Card.module.css';
export default function Card({
  title,
  imageUrl,
  description,
  variant = false,
}: {
  title: string;
  imageUrl: string;
  description: string;
  variant?: boolean;
}) {
  return (
    <div className={`${styles.cardContainer}`}>
      <div
        className={`${styles.cardHexagon} ${
          variant ? styles.cardHexagonMedium : ''
        }`}
      >
        <img src={imageUrl} alt="" />
      </div>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}
