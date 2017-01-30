var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); 	//dependente do que foi definido no file webpack.config.js
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => 
{
	//.............
	it('Should exist (Timer)', () => {
		expect(Timer).toExist();
	});
	//.............
	it('Should start timer on started status************', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		
		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);

		setTimeout( () => {
			expect(timer.state.countdownStatus).toBe('started');
			expect(timer.state.count).toBe(1);
			done();
		}, 1001);		
	});
	//.............
	it('Should pause timer on paused status---------------', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');

		setTimeout( () => {
			expect(timer.state.countdownStatus).toBe('paused');
			expect(timer.state.count).toBe(10);
			done();
		}, 1001);	
	});
	//.............
	it('Should clear count on stopped status!!!!!!!!!!!', (done) => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');

		setTimeout( () => {
			expect(timer.state.countdownStatus).toBe('stopped');
			expect(timer.state.count).toBe(0);
			done();
		}, 1001);	
	});
	//.............
});