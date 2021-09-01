import React from 'react';
import styles from './../../styles/descriptionLayout.module.scss';
import { Col, Row } from 'react-bootstrap';
interface IDescription {
  text: string;
  title: string;
  category: string;
}

const Description = ({ text, category, title }: IDescription) => {
  return (
    <div className={styles.description__layout}>
      <Row>
        <Col lg={7} className={styles.description__layout__textarea}>
          <h2>{title}</h2>
          <h4>{category}</h4>
          <p className={styles.description__layout__text}> {text} </p>
        </Col>

        <Col lg={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam
          soluta vero sapiente aliquam quaerat magni mollitia illo, quis
          blanditiis. Iusto sapiente modi quae aspernatur! Voluptatibus totam
          eos perferendis praesentium?
        </Col>
      </Row>
    </div>
  );
};

export default Description;
