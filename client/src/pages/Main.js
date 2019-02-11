// @flow

import React from 'react';
import { Input, Button, Row, Col } from 'reactstrap';
import ErrorMessage from '../components/ErrorMessage';

export default class Main extends React.Component {
  state: {
    value: string,
  };

  state = {
    value: '',
    answer: null,
    showWrong: false,
  };

  handleSubmit = async (e) => {
    // Stop the default action
    e.preventDefault();

    // Make the request
    await fetch('/api/get-nums', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: this.state.value }),
    })
      .then((response) => response.json())
      .then((res) => this.setState({ answer: JSON.stringify(res) }))
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  handleChange = (event) => {
    // Simple input validation—only #s
    var reg = new RegExp('^[0-9]*$');
    if (!reg.test(event.target.value)) {
      this.setState({ showWrong: true });
    } else {
      this.setState({ value: event.target.value, showWrong: false });
    }
  };

  render() {
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
                  style={{
                    fontSize: '50px',
                    width: '100%',
                    height: '100%',
                  }}
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <ErrorMessage show={this.state.showWrong} />

              <Button type="submit" color="primary" value="Submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className="answer">
          <p>{this.state.answer}</p>
        </div>
      </div>
    );
  }
}
