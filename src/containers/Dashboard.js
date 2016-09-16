import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import FeedbackList from '../components/FeedbackList';

export default class Dashboard extends Component {

	constructor() {
		super();
		this.state = { feedback: [] };
	}

	componentDidMount() {
		fetch('http://cache.usabilla.com/example/apidemo.json')
			.then(response => response.json())
			.then(data => {
				//TODO: determine how much feedback to display
				this.setState({ feedback: data.items.slice(0, 30) });
			})
			.catch(error => {
				//TODO: handle errors and loading for the user
				console.error('Error', error);
			});
	}

	render() {
		return (
			<div>
				<PageHeader title="Dashboard" />

				<main className="ub-pagecontainer">
					<div className="ub-panel">
						<FeedbackList feedback={this.state.feedback} />
					</div>
				</main>
			</div>
		)
	}
}