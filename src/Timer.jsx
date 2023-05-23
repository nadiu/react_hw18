import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 2 * 60, 
            isCounting: true,
        };
    }
 
    componentDidMount() {   
        this.interval = setInterval(() => { 
        const { isCounting, timeLeft } = this.state;
            if (isCounting && timeLeft >= 1) {  
        this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }));
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        }
    
    getPadTimes(time) {
        return time.toString().padStart(2, '0');
    }

    handleStart = () => {
        this.setState({ isCounting: true });
    };

    handleStop = () => {
        this.setState({ isCounting: false });
    };

    handleReset = () => {
        this.setState({ isCounting: false, timeLeft: 2 * 60 });
    };

    render() {
    const { timeLeft, isCounting } = this.state;
    const minutes = this.getPadTimes(Math.floor(timeLeft / 60));
    const seconds = this.getPadTimes(timeLeft - minutes * 60);

    return (
        <div className="hours">
            <h1 className='timer'>Timer</h1>
            <div className="timer_left">
            <h2>Time left: <n />
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            </h2>
            </div>
            <div className="buttons">
            {isCounting ? (
                <button className='button_one' onClick={this.handleStop}>stop</button>
            ) : (
                <button className='button_two' onClick={this.handleStart}>start</button>
            )}
            <button className='button_three' onClick={this.handleReset}>reset</button>
            </div>
        </div>
        );
    }
    }

export default Timer;