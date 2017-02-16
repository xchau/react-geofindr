import React from 'react';
import { Link } from 'react-router';
import Icon from 'react-geomicons';
import Nav from '../NavBar/Nav';
import Footer from '../Footer/Footer';
import './Howto.css';

function Howto(props) {
  return <div>
      <Nav>
        <Link to="/" className="Nav-LogoName">GeoFindr</Link>
      </Nav>
      <div className="Howto-Content">
        <div className="fl w-20 Howto-LeftContainer">
         <Link to="/" className="br-100 bw-4 f2 Howto-Back">
           <Icon name="chevronLeft" className="Howto-Icon" />
         </Link>
        </div>
        <div className="fl f5 w-80 Howto-RightContainer">
          <section>
            <h3 className="b Howto-Title">How to Play GeoFindr</h3>
            <p>GeoFindr is a less fleshed-out clone of <a className="Howto-Link" href="https://geoguessr.com">GeoGuessr</a>. Your goal in GeoFindr is to guess which city in the world the clues provided allude to.</p>
            <p>The hints may contain useful bits of information such as a capital city or population count to help you on your way. </p>
            <p>But sometimes taking a look at the Google Street View might be more helpful. Funny how there are no street labels though. ;)</p>
            <p>Once you have a good hunch, pin your guess to the map and prepare for victory!</p>
            <p>Your total points awarded will be determined by how close your guess to the given city. Not satisfied with your score? Try again!</p>
          </section>
        </div>
      </div>
      <Footer>
        <span className="Footer-FooterText">GeoFindr 2017</span>
        <span className="Footer-FooterText">Powered by React + GoogleMaps API</span>
      </Footer>
    </div>
}

export default Howto;
