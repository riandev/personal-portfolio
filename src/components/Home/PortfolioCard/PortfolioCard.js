import React from "react";
import { Card } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const PortfolioCard = ({ portfolio }) => {
  return (
      <div className="col-md-4">
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Zoom>
              <Card.Img variant="top" src={portfolio.photo} />
            </Zoom>
            <Card.Title className="mt-3">{portfolio.title}</Card.Title>
            <Card.Subtitle className="mb-4 mt-3 text-muted">
              {portfolio.description}
            </Card.Subtitle>
            <Card.Link
              className="btn btn-danger"
              target="_blank"
              href={portfolio.frontend}
            >
              Frontend
            </Card.Link>
            <Card.Link
              className="btn btn-success"
              target="_blank"
              href={portfolio.backend}
            >
              Backend
            </Card.Link>
            <Card.Link
              className="btn btn-warning"
              target="_blank"
              href={portfolio.preview}
            >
              Preview
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
  );
};

export default PortfolioCard;
