/**
 * Created by David on 2/7/2017.
 */
import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            timerStatus:'stopped'
        }
    };

    handleStatusChange = (newTimerStatus) => {
        console.log('newTimerStatus', newTimerStatus)
        this.setState({
            timerStatus:newTimerStatus
        })
        console.log('state => ', this.state.timerStatus)
    }

    handleStart = () => {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        },1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started' :
                    this.handleStart();
                    break
                case 'stopped' :
                    this.setState({count:0});
                case 'paused' :
                    clearInterval(this.timer)
                    this.timer = undefined
                    break

            }
        }
    }

    render() {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
}

export default Timer;