import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import FeedbackList from '../components/FeedbackList';
import RatingFilters from '../components/RatingFilters';
import CommentFilter from '../components/CommentFilter';

export default class Dashboard extends Component {

	constructor() {
		super();
		this.state = { feedback: [], selectedRatings: new Set([1,2,3,4,5]), query: '' };
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

	handleToggleRating(rating) {
		const ratings = this.state.selectedRatings;

		if (ratings.has(rating)) ratings.delete(rating)
		else ratings.add(rating)

		this.setState({ selectedRatings: ratings });
	}

	handleFilterComments(query) {
		this.setState({ query });
	}

	render() {
		const { feedback, selectedRatings, query } = this.state;
		return (
			<div>
				<PageHeader title="Dashboard" />

				<main className="ub-pagecontainer">
					<CommentFilter query={query} filterComments={(query) => this.handleFilterComments(query)} />
					<RatingFilters toggleRating={(rating) => this.handleToggleRating(rating)} selectedRatings={selectedRatings} />
					<div className="ub-panel">
						<FeedbackList feedback={feedback} selectedRatings={selectedRatings} query={query} />
					</div>
				</main>
			</div>
		)
	}
}