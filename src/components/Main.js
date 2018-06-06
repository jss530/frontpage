import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Media } from 'reactstrap';
import profile from '../details/img/main.jpg';
import './Main.css';


class Main extends React.Component {
  render() {
    return (
      <div>
        <Media>
          <Media object src={ profile } alt="Main image" />
        </Media>
      </div>
    );
  };
};

export default Main;
