import Card from '../components/Card';
import Progressbar from '../components/Progessbar';
import styles from './About.module.css';
export default function About() {
  return (
    <>
      <div className={styles.about}>
        <h1>About</h1>
        <div className={styles.containerBenefits}>
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
        <div className={`${styles.containerAboutMe}`}>
          <Card
            title="title"
            imageUrl="https://picsum.photos/280/250"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, distinctio voluptatum ratione consequuntur repellendus neque."
            variant={true}
          />
          <div className={styles.skills}>
            <Progressbar width={90} />
            <Progressbar width={80} />
            <Progressbar width={70} />
            <Progressbar width={60} />
            <Progressbar width={55} />
            <Progressbar width={50} />
          </div>
        </div>
      </div>
    </>
  );
}
