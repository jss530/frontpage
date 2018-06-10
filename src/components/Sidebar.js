import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import sparkling from '../details/img/sparkling.jpg';
import redWine from '../details/img/Wine-1.jpg';
import tours from '../details/img/Wine-tour.jpg';
import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <h3 id="sidebar-intro">Here's what's new: </h3>
          <Image src={ redWine } className="sidebar-image" />
            <h3>New red wines are in!</h3>
            <p>Go to the red wine category to see what's new!</p>
          <Image src={ tours } className="sidebar-image" />
            <h3>Wine tours</h3>
            <p>Introducing wine tours! We will be hosting several throughout the year.</p>
          <Image src={ sparkling } className="sidebar-image" />
            <h3>BUBBLES!</h3>
            <p>Your favorites are back in stock.</p>
        </Row>
      </Grid>
    );
  };
};

export default Sidebar;
