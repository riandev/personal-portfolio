import React from "react";
import { Card } from "react-bootstrap";

const ContactMeCard = ({ contact }) => {
  return (
    <div className="col-md-4">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Img
          className="w-50"
            variant="top"
            src={contact.icon}
          />
          <Card.Title className="mt-3">{contact.title}</Card.Title>
          <Card.Subtitle className="mb-4 mt-3 text-muted">
            {contact.description}
          </Card.Subtitle>
          <Card.Link>{contact.via}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactMeCard;
