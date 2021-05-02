import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";

const Footer = () => {
  const noNamed = [
    { name: "Home", link: "/emergency" },
    { name: "Expertise", link: "/checkup" },
    { name: "Portfolio", link: "/personal-treatment" },
    { name: "Reviews", link: "/tooth-extract" },
    { name: "Contact Me", link: "/checkup" },
  ];
  const projects = [
    { name: "Digital Laundry", link: "/emergency" },
    { name: "Dhaka Mart", link: "/checkup" },
    { name: "Query Management System", link: "/personal-treatment" },
  ];
  const ourAddress = [
    { name: "Dhaka, Bangladesh", link: "//google.com/map" },
    { name: "Dhaka", link: "//google.com/map" },
  ];
  const blogFeed = [
    { name: "Comming Soon", link: "/emergency" },
    { name: "Comming Soon", link: "/checkup" },
    { name: "Comming Soon", link: "/personal-treatment" },
    {
      name: "Comming Soon",
      link: "/tooth-extract",
    },
    { name: "Comming Soon", link: "/checkup" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle="RIAN" menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Project" menuItems={projects} />
          <FooterCol key={3} menuTitle="Blog Feed" menuItems={blogFeed} />
          <FooterCol key={4} menuTitle="My Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/riandev">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faGithub}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/rashaduzamman-rian-a97429211/">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-primary">+8801632321051</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
