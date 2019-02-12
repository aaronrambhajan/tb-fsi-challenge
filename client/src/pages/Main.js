// @flow

import React from 'react';
import { Input, Button } from 'reactstrap';
import ErrorMessage from '../components/ErrorMessage';

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
   * POSTs user-inputted text to be calculated.
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

    // Make the request
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
      this.setState({ showErrorMsg: true });
    } else {
      this.setState({
        submitValue: event.target.value,
        showErrorMsg: false,
      });
    }
  };

  render = () => {
    return (
      <div className="home">
        <div className="user-input">
          <h1>Median Prime Numbers</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                <Input
                  type="text"
                  placeholder="Enter a number..."
                  value={this.state.submitValue}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>

              <ErrorMessage show={this.state.showErrorMsg} />

              <Button type="submit" color="primary" value="Submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className="answer">
          <p>{this.state.apiAnswer}</p>
        </div>
      </div>
    );
  };
}
