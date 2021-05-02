import React from "react";
import { Card } from "react-bootstrap";
import "./ButtonNotes.css";

const ButtomNotes = ({ notes }) => {
  return (
    <div className="col-md-4 mt-4 text-center">
      <div>
        <Card className='card-custom1' style={{ width: "12rem" }}>
          <Card.Body>
            <Card.Title>{notes.count}</Card.Title>
            <Card.Text>{notes.note}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ButtomNotes;
