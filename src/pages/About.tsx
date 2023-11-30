import Card from '../components/Card';
import styles from './About.module.css';
export default function About() {
  return (
    <>
      <div className={styles.about}>
        <h1>About</h1>
        <div className={styles.container}>
          <Card
            title="title"
            imageUrl="https://picsum.photos/115/100"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, distinctio voluptatum ratione consequuntur repellendus neque."
          />{' '}
          <Card
            title="title"
            imageUrl="https://picsum.photos/115/100"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, distinctio voluptatum ratione consequuntur repellendus neque."
          />{' '}
          <Card
            title="title"
            imageUrl="https://picsum.photos/115/100"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, distinctio voluptatum ratione consequuntur repellendus neque."
          />{' '}
          <Card
            title="title"
            imageUrl="https://picsum.photos/115/100"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, distinctio voluptatum ratione consequuntur repellendus neque."
          />
        </div>
        <div
          className={`${styles.container__grid_1} ${styles.container__grid_2_md}`}
        >
          <Card
            title="title"
            imageUrl="https://picsum.photos/280/250"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, distinctio voluptatum ratione consequuntur repellendus neque."
            variant={true}
          />
          <div className={styles.skills}></div>
        </div>
      </div>
    </>
  );
}
