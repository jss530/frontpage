import React from 'react';
import { Grid, Row, Col, Table} from 'react-bootstrap';


class Events extends React.Component {
  render() {
    return (
      <Grid>
        <h2>Events near you</h2>
        <p>Click on the event to learn more</p>
        <Table responsive hover>
          <thead>
            <th>Date</th>
            <th>Event</th>
            <th>Location</th>
          </thead>
          <tbody>
            <tr>
              <td>July 3</td>
              <td>The Red Wines of Burgundy</td>
              <td>Lincoln Center</td>
            </tr>
            <tr>
              <td>July 15</td>
              <td>Loire Valley Wines</td>
              <td>Lincoln Center</td>
            </tr>
            <tr>
              <td>August 1</td>
              <td>Oregon Wines</td>
              <td>Columbus Circle</td>
            </tr>
            <tr>
              <td>August 30</td>
              <td>Australian Wines</td>
              <td>World Trade Center</td>
            </tr>
            <tr>
              <td>September 5</td>
              <td>New World Wines</td>
              <td>Columbus Circle</td>
            </tr>
          </tbody>
        </Table>
      </Grid>
    );
  };
};

export default Events;
