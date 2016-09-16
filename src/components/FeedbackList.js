import React from 'react';
import FeedbackItem from './FeedbackItem';

//TODO: need to map platform to Desktop/Mobile/Tablet etc
const FeedbackList = ({feedback, selectedRatings}) => {
	const filteredFeedback = feedback.filter(feedback => {
		return selectedRatings.has(feedback.rating);
	});

	return (
		<table className="ub-table">
			<thead className="ub-table--head">
				<tr>
					<th className="ub-table--title">Rating</th>
					<th className="ub-table--title">Comment</th>
					<th className="ub-table--title">Browser</th>
					<th className="ub-table--title">Device</th>
					<th className="ub-table--title">Platform</th>
				</tr>
			</thead>
			<tbody className="ub-table--body">
				{filteredFeedback.map(feedback => {
					return <FeedbackItem 
						key={feedback.id}
						rating={feedback.rating} 
						comment={feedback.comment}
						browserName={feedback.computed_browser.Browser}
						browserVersion={feedback.computed_browser.Version}
						device={feedback.computed_browser.Browser}
						platform={feedback.browser.platform} />
				})}
			</tbody>
		</table>
	)
}

FeedbackList.PropTypes = {
	feedback: React.PropTypes.array
}

export default FeedbackList;