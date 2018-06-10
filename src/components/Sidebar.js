import React from 'react';
import { Grid, Row, Col, Carousel, Carousel.Item, Carousel.Caption } from 'react-bootstrap';
import sparkling from '../details/img/sparkling.jpg';
import redWine from '../details/img/Wine-1.jpg';
import tours from '../details/img/Wine-tour.jpg';

class Sidebar extends React.Component {
  render() {
    return (
        <Grid>
          <Row>
            <Col>
              <h3>Here's what's new:</h3>
              <Carousel>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/carousel.png" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/carousel.png" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="/carousel.png" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Grid>

    );
  };
};

export default Sidebar;
