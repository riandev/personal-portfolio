import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Reviews from "../Reviews/Reviews";
import Skills from "../Skills/Skills";
import Bounce from "react-reveal/Bounce";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Bounce right>
        <Skills></Skills>
      </Bounce>
      <Bounce right>
        <Portfolio></Portfolio>
      </Bounce>
      <Bounce right>
        <Reviews></Reviews>
      </Bounce>
      <Bounce right>
        <Resume></Resume>
      </Bounce>
      <Bounce right>
        <ContactMe></ContactMe>
      </Bounce>
      <Footer></Footer>
    </div>
  );
};

export default Home;
