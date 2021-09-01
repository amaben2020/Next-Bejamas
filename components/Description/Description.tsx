import React from 'react';
import styles from './../../styles/descriptionLayout.module.scss';
import { Col, Row } from 'react-bootstrap';
interface IDescription {
  text: string;
}

const Description = ({ text }: IDescription) => {
  return (
    <div className={styles.description__layout}>
      <Row>
        <Col lg={7}>
          <h2>Header Text</h2>
          {text}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          earum unde necessitatibus pariatur sapiente mollitia tempore veniam.
          Perspiciatis nostrum alias deleniti similique, corrupti dolores, sequi
          ut illo repellendus et laudantium.
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
