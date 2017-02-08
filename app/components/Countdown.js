/**
 * Created by David on 2/7/2017.
 */
import React from 'react';
import Clock from 'Clock';


class Countdown extends React.Component {
    render() {
        return (
            <div>
                <Clock totalSeconds={82}/>
            </div>
        )
    }
}

export default Countdown;