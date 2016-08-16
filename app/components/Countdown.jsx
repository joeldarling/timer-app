const React = require('react');

const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Controls = require('Controls');

const Countdown = React.createClass({
  getInitialState: function(){
      return {
        count: 0,
        countdownStatus: 'stopped'
      };
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleStatusChange: function(newStatus){
    this.setState({countdownStatus: newStatus});
  },
  startTimer: function(){
    console.log('timer start');
    this.timer = setInterval(()=>{
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0){
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
    if(this.state.count === 0){
      clearInterval(this.timer);
      this.setState({countdownStatus: 'stopped'});
    }
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({countdownStatus: newStatus});
  },
  render: function(){
    let { count, countdownStatus } = this.state;
    let renderControlArea = ()=>{
      if(countdownStatus!=='stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };
    return (
        <div>
          <Clock totalSeconds={count}/>
          {renderControlArea()}
        </div>
    );
  }
});

module.exports = Countdown;
