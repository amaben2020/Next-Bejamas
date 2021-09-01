import React from 'react';
import styles from './../../styles/descriptionLayout.module.scss';
import { Col, Row } from 'react-bootstrap';
interface IDescription {
  text: string;
  title: string;
  category: string;
  recommendations: any;
}

const Description = ({
  text,
  category,
  title,
  recommendations,
}: IDescription) => {
  return (
    <div className={styles.description__layout}>
      <Row>
        <Col lg={7} className={styles.description__layout__textarea}>
          <h2 className={styles.description__layout__textarea__headingLarge}>
            About the {title}
          </h2>
          <h4>{category}</h4>
          <p className={styles.description__layout__text}> {text} </p>
        </Col>

        <Col lg={5} className={styles.description__layout__details}>
          <h4 className={styles.description__layout__details__heading}>
            People also buy
          </h4>

          {recommendations?.map(
            (recommendation: {
              name:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <p>{recommendation.name}</p>

              // <img
              //   src={image && recommendation.image.formats.thumbnail.url}
              //   alt=""
              // />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Description;
