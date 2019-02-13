// @flow

/**
 * Main container for all front-end interactions.
 */

import React from 'react';
import { Input, Button } from 'reactstrap';
import ErrorMessage from '../components/ErrorMessage';
import Answer from '../components/Answer';
import PrimeInput from '../components/PrimeInput';

export default class Main extends React.Component {
  state: {
    submitValue: string,
    apiAnswer: Number,
    showErrorMsg: boolean,
  };

  state = {
    submitValue: '',
    apiAnswer: null,
    showErrorMsg: false,
  };

  /**
   * POSTs user-inputted text for calculation..
   *
   * @param {SyntheticEvent} event
   *    DOM event handler
   */
  handleSubmit = async (event) => {
    // Stop the default refresh
    event.preventDefault();

    // Block empty submissions
    if (this.state.submitValue === '') {
      this.setState({ showErrorMsg: true });
      return;
    }

    // Make the request + update with an answer!
    await fetch('/api/v1/get_nums', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: this.state.submitValue }),
    })
      .then((response) => response.json())
      .then((res) => this.setState({ apiAnswer: JSON.stringify(res) }))
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  /**
   * Updates the contents of the form input.
   *
   * @param {SyntheticEvent} event
   *    DOM event handler
   */
  handleChange = (event) => {
    // Validate input (only numerical)
    var reg = new RegExp('^[0-9]*$');
    if (!reg.test(event.target.value)) {
      // Block from being entered and display error
      this.setState({ showErrorMsg: true });
    } else {
      // Disable the error and update the input box
      this.setState({
        submitValue: event.target.value,
        showErrorMsg: false,
      });
    }
  };

  render = () => {
    return (
      <div className="home">
        <h1>Median Prime Numbers</h1>

        {/* All user input */}
        <div className="user-input">
          <form onSubmit={this.handleSubmit}>
            <PrimeInput
              value={this.state.submitValue}
              handleChange={this.handleChange}
            />
            <ErrorMessage display={this.state.showErrorMsg} />
            <Button type="submit" color="primary" value="Submit">
              Submit
            </Button>
          </form>
        </div>

        <Answer text={this.state.apiAnswer} />
      </div>
    );
  };
}
