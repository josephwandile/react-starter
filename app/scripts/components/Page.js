'use strict';

let React = require('react');

let Page = React.createClass({

  getInitialState: function() {
    return {
      pageNum: 0
    }
  },

  componentDidMount: function() {

    let { query } = this.props.location;
    let pageNum = query.pageNum;

    if (!pageNum) {
      pageNum = 'NP';
    }

    this.setState({
      pageNum
    });

  },

  render: function() {

    return (
      <div className="intro-content">
        <p>
          This is page {this.state.pageNum}.
        </p>
      </div>
    );
  }

});

module.exports = Page;
