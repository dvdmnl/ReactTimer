import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('Should Exist', () => {
        expect(Countdown).toExist();
    });

    describe('HandleSetCountdown', () => {
        it('Should set state to stated and countdown', (done) => {
            var countdown = ReactUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done()
            },1001)
        });

        it('Should never set count under zero', (done) => {
            var countdown = ReactUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(1);
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done()
            },3000)
        });

        it('Should pause countdown when paused status', () => {
            var countdown = ReactUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
            },1001);
        });


        it('Should reset countdown when stopped status', () => {
            var countdown = ReactUtils.renderIntoDocument(<Countdown/>)
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
            },1001);
        });


    });


});