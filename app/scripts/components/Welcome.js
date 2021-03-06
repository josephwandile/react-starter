'use strict';

let React = require('react');

let Welcome = React.createClass({

  render: function() {

    return (
      <div className="intro-content">
        <p>
          This is a minimal seed project created by <a href="https://github.com/josephwandile">@josephwandile</a> and <a href="https://github.com/tomasreimers">@tomasreimers</a> for their ReactJS projects. Hope it's helpful for whatever you're working on!
        </p>
      </div>
    );
  }

});

module.exports = Welcome;
