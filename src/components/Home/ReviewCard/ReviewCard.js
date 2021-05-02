import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = (props) => {
  const { photo, name, star, reviewtext } = props.ratings;
  return (
    <div className="col-md-4">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Img style={{borderRadius:'50%'}} className="w-25" variant="top" src={photo} />
          <Card.Title className="mt-3">{name}</Card.Title>
          <Card.Text>
            <Rating
              initialRating={star}
              readonly
              fullSymbol={<FontAwesomeIcon icon={faStar} />}
            />
          </Card.Text>
          <Card.Subtitle className="mb-4 mt-3 text-muted">
            {reviewtext}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
