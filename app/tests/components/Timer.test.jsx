import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import Timer from 'Timer'

describe('Timer', () => {
    it('Should Exist', () => {
        expect(Timer).toExist();
    })


    it('Should start Timer when status is started', (done) => {
        var timer = ReactUtils.renderIntoDocument(<Timer/>)
        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(1);
            done();
        },1001)
    })

    it('Should pause Timer when status is paused', (done) => {
        var timer = ReactUtils.renderIntoDocument(<Timer/>)
        timer.setState({count:10})
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.count).toBe(10);
            done();
        },1001)
    })

    it('Should clear count on stopped status', (done) => {
        var timer = ReactUtils.renderIntoDocument(<Timer/>)
        timer.setState({count:10})
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
            done();
        },1001)
    })

})