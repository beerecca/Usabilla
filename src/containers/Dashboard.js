import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import FeedbackList from '../components/FeedbackList';

export default class Dashboard extends Component {

	render() {
		return (
			<div>
				<PageHeader title="Dashboard" />

				<main className="ub-pagecontainer">
					<div className="ub-panel">
						<FeedbackList feedback={[]} />
					</div>
				</main>
			</div>
		)
	}
}