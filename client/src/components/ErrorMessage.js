// @flow

import React from 'react';
import { Row } from 'reactstrap';
import errorMark from '../images/error-mark.svg';

export default class ErrorMessage extends React.Component {
  props: {
    show: boolean,
  };

  render = () => {
    return (
      <div style={{ height: 50, padding: 10 }}>
        <div
          style={{
            display: this.props.show ? 'inherit' : 'none',
          }}
        >
          <Row>
            <img
              src={errorMark}
              alt="invalid-input"
              style={{
                height: 24,
                width: 24,
                marginLeft: 5,
                marginRight: 5,
              }}
            />
            <p style={{ opacity: 0.5 }}>invalid input</p>
          </Row>
        </div>
      </div>
    );
  };
}
