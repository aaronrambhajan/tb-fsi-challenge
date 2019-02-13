// @flow

/**
 * Display component used to display the answer to a user's query.
 */

import React from 'react';

export default class Answer extends React.Component {
  props: {
    text: string,
  };

  render = () => {
    return (
      <div
        className="answer"
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          padding: '1em',
        }}
      >
        <p>{this.props.text}</p>
      </div>
    );
  };
}
