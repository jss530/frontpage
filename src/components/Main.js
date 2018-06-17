import React from 'react';
import { Grid, Row, Col, Image, Jumbotron, Button } from 'react-bootstrap';
import profile from '../details/img/main.jpg';
import Events from './Events.js';
import Signup from './Signup.js';
import './Main.css';


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
          <br/>
          <Jumbotron id="tasting">
            <h1>Tasting notes</h1>
            <p>
              Need help choosing a wine? Want to add to our collection of tasting notes? Click here.
            </p>
          </Jumbotron>
          <br/>
          <Signup/>
        </Row>
      </Grid>
    );
  };
};

export default Main;
