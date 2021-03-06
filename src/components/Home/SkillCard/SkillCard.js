import React from "react";
import { Card } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import "./SkillCard.css";
import HeadShake from "react-reveal/HeadShake";

const SkillCard = ({ skill }) => {
  return (
      <HeadShake>
        <div className="col-md-4">
          <Card className="mb-4 skills-card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img className="img-fluid w-25" src={skill.icon} />
              <Card.Title style={{ fontSize: "18px" }} className="mt-2 mb-3">
                {skill.name}
              </Card.Title>
              <Card.Subtitle
                style={{ fontSize: "14px" }}
                className="mb-2 text-muted"
              >
                {skill.experience}
              </Card.Subtitle>
              <Card.Text className="mt-3">
                <ProgressBar
                  height="15px"
                  bgColor={skill.bgColor}
                  completed={skill.progress}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </HeadShake>
  );
};

export default SkillCard;
