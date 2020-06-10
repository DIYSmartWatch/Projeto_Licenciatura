import React from 'react';
import Subscribe from './Subscribe';
import Socials from '../ui/Socials';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper wrapper--footer">
                <div className="footer__logos">
                    {/* <div className="logo"></div> */}
                    {/* <div className="universal-logo"></div> */}
                    <div className="footer__copy">
                        © Projeto Licenciatura Luís, Tiago 2020
                    </div>
                </div>
                {/* <div className="footer__subscribe">
                    <h3>JOIN MAILING LIST</h3>
                    <Subscribe/>
                </div> */}
                <div className="footer__social">
                    <h3>Mantém-te em contacto conosco</h3>
                    <Socials context="footer"/>
                </div>
            </div>            
        </footer>
    );
};

export default Footer;