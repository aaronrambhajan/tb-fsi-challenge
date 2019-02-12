// @flow

import React from 'react';
import { Row } from 'reactstrap';
import errorMark from '../images/error-mark.svg';

// This component is dynamic, so I'm using inline styles
const styles = {
  container: {
    height: 50,
    padding: 10,
  },
  icon: {
    height: 24,
    width: 24,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    opacity: 0.5,
  },
};

export default class ErrorMessage extends React.Component {
  props: {
    display: boolean,
  };

  render = () => {
    return (
      <div className="error" style={styles.container}>
        <div
          style={{
            display: this.props.display ? 'inherit' : 'none',
          }}
        >
          <Row>
            <img src={errorMark} alt="invalid-input" style={styles.icon} />
            <p style={styles.text}>invalid input</p>
          </Row>
        </div>
      </div>
    );
  };
}
