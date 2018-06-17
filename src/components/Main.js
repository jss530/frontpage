import React from 'react';
import { Grid, Row, Col, Image, Jumbotron, Button } from 'react-bootstrap';
import profile from '../details/img/main.jpg';
import './Main.css';
import Events from './Events.js';


class Main extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Image src={profile} alt="Main image" className="image" rounded={true} responsive={true}/>
          <h1 className="centered-text">Drinking Buddies</h1>
          <Jumbotron>
            <h1>Welcome to Drinking Buddies!</h1>
            <p>
              Drinking buddies connects wine lovers to discuss wine, create local events, and purchase favorites.
            </p>
          </Jumbotron>
          <Events/>
        </Row>
      </Grid>
    );
  };
};

export default Main;
