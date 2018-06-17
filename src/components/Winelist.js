import React from 'react';
import burgundy from '../details/img/burgundy.jpg';
import reisling from '../details/img/reisling.jpg';
import pinot from '../details/img/pinot.jpg';
import { Grid, Row, Col, Image, Thumbnail, Button, ButtonToolbar } from 'react-bootstrap';
import './Winelist.css';


class Winelist extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col>
            <Thumbnail src={burgundy} alt="Burgundy">
            <h3>Ch. Canon, St.-Émilion - 2005</h3>
            <p>Tiny in size, but packs immense flavor. Dark fruit and toasty oak notes are prominent on the nose and palate. Drink over the next ten years.</p>
            <p>
              <ButtonToolbar>
                <Button bsStyle="primary">Buy now</Button>
                <Button bsStyle="warning">Rate & Discuss</Button>
              </ButtonToolbar>
            </p>
            </Thumbnail>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Thumbnail src={reisling} alt="Reisling">
            <h3>Wehlener Sonnenuhr Riesling - 2014</h3>
            <p>This vineyard is full blue slate soil that gives the wine a signature minerality that offsets the sweetness for a beautifully balanced, elegant wine.</p>
            <p>
              <ButtonToolbar>
                <Button bsStyle="primary">Buy now</Button>
                <Button bsStyle="warning">Rate & Discuss</Button>
              </ButtonToolbar>
            </p>
            </Thumbnail>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Thumbnail src={pinot} alt="Pinot noir">
            <h3>The Pinot Project - 2016</h3>
            <p>This younger bottle exudes excellent primary fruit aromas with lively black berried and black cherried fruits. These wines can be held for years.</p>
            <p>
              <ButtonToolbar>
                <Button bsStyle="primary">Buy now</Button>
                <Button bsStyle="warning">Rate & Discuss</Button>
              </ButtonToolbar>
            </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  };
};

export default Winelist;
