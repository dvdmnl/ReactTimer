import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactUtils from 'react-addons-test-utils';


import Controls from 'Controls';

describe('Controls', () => {
    it('Should Be Exsist', () => {
        expect(Controls).toExist();
    });


    describe('render', () => {
        it('Should render paused when start', () => {
            var controls = ReactUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var pauseButton = $el.find('button:contains(Pause)');

            expect(pauseButton.length).toBe(1);
        });

        it('Should render start and paused', () => {
            var controls = ReactUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var startButton = $el.find('button:contains(Start)');

            expect(startButton.length).toBe(1);
        });
    });

});