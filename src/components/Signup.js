import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button, ControlLabel, FieldGroup, Checkbox } from 'react-bootstrap';

class Signup extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={9}>
            <h3>Join our mailing list!</h3>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Your name
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="What should we call you?" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="How can we reach you?" />
                </Col>
              </FormGroup>

              <Checkbox checked readOnly>
                Send me emails about wine specials as well.
              </Checkbox>
              <br/>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Sign me up</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  };
};

export default Signup;
