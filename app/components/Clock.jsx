const React = require('react');

const Clock = React.createClass({
  getDefaultProps: function(){
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds){
    let seconds = padZero(totalSeconds % 60);
    let minutes = padZero(Math.floor(totalSeconds / 60));

    return `${minutes}:${seconds}`;
  },
  render: function(){

    const {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }

});

function padZero(x){
  if(x < 10)
    return '0' + x;
  else
    return x;
}

module.exports = Clock;
