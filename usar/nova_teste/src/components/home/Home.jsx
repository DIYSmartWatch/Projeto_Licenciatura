import React from 'react';
import Nav from '../ui/Nav';
import Landing from './Landing';
import {Element, scroller} from 'react-scroll';
import { Fade } from 'react-reveal';

const Home = () => {

    const scrollToLanding = elem => { // quando clicar no explore new album a velocidade que aparece a info
        scroller.scrollTo(elem, {
            duration: 800,
            delay: 100,
            smooth: true,            
        })
    }

    return (
        <div className="home">
            <Fade>
                <div className="home__header">
                    <div className="wrapper">                    
                        <div className="logo"></div>                    
                        <Nav context="home"/>
                        <div className="home__caption" >
                            WHAT WE DO
                        </div>           
                        <div className="home__scroll-down" onClick={() => scrollToLanding('landing')}></div>                    
                    </div>
                </div>
            </Fade>
            <Element name="landing">
                <Landing/>
            </Element>            
        </div>
    );
};

export default Home;