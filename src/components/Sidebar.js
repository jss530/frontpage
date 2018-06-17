import React from 'react';
import { Carousel } from 'react-bootstrap';
import sparkling from '../details/img/sparkling.jpg';
import redWine from '../details/img/reds.jpg';
import tours from '../details/img/Wine-tour.jpg';
import './Sidebar.css';
import Winelist from './Winelist';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h3 id="sidebar-intro">Here's what's new:</h3>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="red-wines" src={ redWine } />
            <Carousel.Caption>
              <h3>New reds!</h3>
              <p>Go to the red wine category to see what's new!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="wine-tours" src={ tours } />
            <Carousel.Caption>
              <h3>Wine tours</h3>
              <p>We will be hosting several throughout the year.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="sparkling" src={ sparkling } />
            <Carousel.Caption>
              <h3>We've got bubbles!</h3>
              <p>Your favorites are back in stock.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Winelist/>
      </div>
    );
  };
};

export default Sidebar;
