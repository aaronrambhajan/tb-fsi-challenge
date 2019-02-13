// @flow

/**
 * Takes user input.
 */

import React from 'react';
import { Input } from 'reactstrap';

export default class PrimeInput extends React.Component {
  props: {
    value: string, // current value of input
    handleChange: Function, // action for updating input field
  };

  render = () => {
    return (
      <div>
        <Input
          type="text"
          placeholder="Enter a number..."
          value={this.props.value}
          onChange={this.props.handleChange}
          style={{
            border: '3px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>
    );
  };
}
