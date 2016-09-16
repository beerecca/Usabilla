import React from 'react';

const FeedbackItem = ({comment}) => {
	return (
		<p>{comment}</p>
	)
}

FeedbackItem.PropTypes = {
	comment: React.PropTypes.string.isRequired
}

export default FeedbackItem;