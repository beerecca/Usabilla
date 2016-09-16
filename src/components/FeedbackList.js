import React from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedback}) => {
	return (
		<ul>
			{feedback.map(feedback => {
				return <li key={feedback.id}><FeedbackItem comment={feedback.comment} /></li>
			})}
		</ul>
	)
}

FeedbackList.PropTypes = {
	feedback: React.PropTypes.array
}

export default FeedbackList;