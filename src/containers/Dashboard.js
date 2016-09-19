import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import RatingFilter from '../components/RatingFilter';
import CommentFilter from '../components/CommentFilter';
import Table from '../components/Table';
import RatingChart from '../components/RatingChart';
import RatingRow from '../components/RatingRow';
import FeedbackRow from '../components/FeedbackRow';
import Loading from '../components/Loading';
import DashboardIcon from '../assets/DashboardIcon';
import { ratingValues } from '../const/const';

export default class Dashboard extends Component {

	constructor() {
		super();
		this.state = { feedback: [], selectedRatings: new Set(Object.keys(ratingValues)), query: '' };
	}

	componentDidMount() {
		fetch('http://cache.usabilla.com/example/apidemo.json')
			.then(response => response.json())
			.then(data => {
				this.setState({ feedback: data.items });
			})
			.catch(error => {
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

		//Create array of ratings and rating count
		const ratingData = feedback.reduce((array, item) => {
			const existingRating = array.find(obj => obj.rating === item.rating);
			if (existingRating) {
				return array
					.filter(obj => obj.rating !== item.rating)
					.concat({
						...existingRating,
						count: existingRating.count + 1
					});
			} else {
				return array.concat({
					rating: item.rating,
					label: ratingValues[item.rating],
					count: 1
				});
			}
		}, []);

		ratingData.sort((a, b) => {
			if (a.rating > b.rating) return 1;
		});

		const filteredFeedback = feedback.filter(feedback => {
			return selectedRatings.has(feedback.rating.toString()) && feedback.comment.includes(query);
		});

		const getDevice = function(platform) {
			return (platform === 'MacIntel' || platform === 'Win32' || platform === 'Linux armv7l') ? 'Desktop' : platform;
		};

		if (feedback.length === 0) {
			return (
				<div>
					<PageHeader title="Dashboard" icon={<DashboardIcon className="ub-icon" />} />
					<main className="ub-pagecontainer">
						<Loading />
					</main>
				</div>
			)
		}

		return (
			<div>
				<PageHeader title="Dashboard" icon={<DashboardIcon className="ub-icon" />} />
				<main className="ub-pagecontainer">

					<div className="ub-panel ub-padding-xlarge ub-margin-bottom-xlarge">
						<div className="ub-table--ratingscontainer">
							<Table columns={['Rating', '# items']} className="ub-table--ratings">
								{ratingData.map(item => {
									return <RatingRow 
										key={item.rating}
										rating={item.rating}
										label={item.label}
										count={item.count} />
								})}
							</Table>
						</div>
						<div className="ub-ratingchart"><RatingChart feedback={feedback} /></div>
					</div>

					<div className="ub-grid-flex ub-margin-bottom">
						<CommentFilter query={query} filterComments={(query) => this.handleFilterComments(query)} />
						<RatingFilter toggleRating={(rating) => this.handleToggleRating(rating)} selectedRatings={selectedRatings} />
					</div>
					
					<div className="ub-panel ub-table--scroll">
						<Table columns={['Rating', 'Comment', 'Browser', 'Device', 'Platform']} className="ub-table--feedback">
							{filteredFeedback.map(feedback => {
								return <FeedbackRow 
									key={feedback.id}
									rating={feedback.rating} 
									comment={feedback.comment}
									labels={feedback.labels}
									browserName={feedback.computed_browser.Browser}
									browserVersion={feedback.computed_browser.Version}
									device={getDevice(feedback.browser.platform)}
									platform={feedback.computed_browser.Platform} />
							})}
						</Table>
					</div>
				</main>
			</div>
		)
	}
}
