import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
    it('Sould exist',() => {
        expect(CountdownForm).toExist();
    })

    it('Should Call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = ReactUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        ReactUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    })

    it('Should Not Call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = ReactUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'abc';
        ReactUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
})