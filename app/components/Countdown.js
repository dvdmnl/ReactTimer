/**
 * Created by David on 2/7/2017.
 */
import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm'
import Controls from 'Controls';

class Countdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            countdownStatus:'stopped'
        }
    };

    handleSetCountdown = (seconds) => {
        this.setState({
            count:seconds,
            countdownStatus:'started'
        })
    }

    handleStatusChange = (newStatus) => {
        this.setState({
            countdownStatus: newStatus
        })
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if(newCount === 0) {
                this.setState({
                    countdownStatus: 'stopped'
                })
            }
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        this.timer = undefined;
    }

    componentDidUpdate(prevProp, prevState){
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started' :
                    this.startTimer();
                    break;
                case 'stopped' :
                    this.setState({count:0});
                case 'paused' :
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break
            }
        }
    }


    render() {
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if(countdownStatus !== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        }
        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        )
    }
}

export default Countdown;