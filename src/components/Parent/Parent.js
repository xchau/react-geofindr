import React from 'react';
import Nav from '../NavBar/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function Parent(props) {
  return (
    <div id="wrapper">
      <Nav>
        <span className="App-NavName">GeoFindr</span>
      </Nav>
      {props.children}
      <Footer>
        <span className="App-FooterText">GeoFindr</span>
      </Footer>
    </div>
  );
}

export default Parent;
