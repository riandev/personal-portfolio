import React from "react";
import Typewriter from "typewriter-effect";
import photo from "../../../images/Topimg.png";
import github from "../../../images/github.png";
import linkedin from "../../../images/linkedin.png";
import ButtomNotes from "../ButtomNotes/ButtomNotes";
import Typical from "react-typical";
import { Card } from "react-bootstrap";

const HeaderMain = () => {
  const headerButtom = [
    {
      count: "15k+",
      note: "Happy Customer",
    },
    {
      count: "12k+",
      note: "Ticket Solved",
    },
    {
      count: "9/10",
      note: "Average Rating",
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="container ml-5">
            <h4 className="mt-5 text-secondary">HEY THERE!</h4>
            <h1>
              <span className="text-danger"> I'm </span>{" "}
              <Typewriter
                options={{
                  strings: ["Rashaduzamman Rian", "Full Stack Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="container mt-4 ml-5">
            <Card.Link target='_blank' href='https://github.com/riandev'>
              <img
                style={{ width: "20px" }}
                className="img-fluid"
                src={github}
                alt=""
              />
            </Card.Link>
            <Card.Link target='_blank' href="https://www.linkedin.com/in/rashaduzamman-rian-a97429211/">
              <img
                style={{ width: "20px" }}
                className="img-fluid"
                src={linkedin}
                alt=""
              />
            </Card.Link>
          </div>
          <div className="container mt-4 ml-5">
            <button className="btn btn-danger">See My Works</button>
          </div>
          <div className="container ml-3">
            <div className="row mt-4">
              {headerButtom.map((notes) => (
                <ButtomNotes notes={notes}></ButtomNotes>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid w-75" src={photo} alt="" />
          <p
            style={{ color: "blueviolet", fontWeight: "700" }}
            className="ml-5 pl-5"
          >
            <Typical
              steps={[
                "Hi There!.",
                2000,
                "console.log('Hello world!')",
                1000,
                "console.log('welcome to my portfolio website')",
                1000,
                "console.log('see my resume')",
                1000,
                "console.log('see my projects')",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
