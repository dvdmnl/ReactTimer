import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
    it('Should Exist', () => {
        expect(Clock).toExist();
    });

    describe('Render', () => {
        it('Should Render clock to output', () => {
            var clock = ReactUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });
    });

    describe('Format Seconds', () => {
        it('Should Format Seconds', () => {
            var clock = ReactUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        })


        it('Should Format Seconds when min/sec are less then 10', () => {
            var clock = ReactUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        })

    })
});