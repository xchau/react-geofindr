import React from 'react';
import { Link } from 'react-router';
import Nav from '../NavBar/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Parent(props) {
  return (
    <div id="wrapper">
      <Nav>
        <Link to="/" className="Nav-LogoName">GeoFindr</Link>
      </Nav>
      <Main />
      {props.children}
      <Footer>
        <span className="Footer-FooterText">GeoFindr 2017</span>
        <span className="Footer-FooterText">Powered by React + GoogleMaps API</span>
      </Footer>
    </div>
  );
}

export default Parent;
