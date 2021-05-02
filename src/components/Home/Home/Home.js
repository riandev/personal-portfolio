import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Reviews from '../Reviews/Reviews';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Reviews></Reviews>
            <Resume></Resume>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;