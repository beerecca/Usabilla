import React, { PropTypes } from 'react';

const FeedbackItem = ({rating, comment, browserName, browserVersion, device, platform}) => {
	return (
		<tr className="ub-table--row">
			<td><div className="ub-rating">{rating}</div></td>
			<td><p>{comment}</p></td>
			<td>
				<p>{browserName}</p>
				<p>{browserVersion}</p>
			</td>
			<td><p>{device}</p></td>
			<td><p>{platform}</p></td>
		</tr>
	)
}

FeedbackItem.PropTypes = {
	rating: PropTypes.number.isRequired,
	comment: PropTypes.string.isRequired,
	browserName: PropTypes.string.isRequired,
	browserVersion: PropTypes.string.isRequired,
	device: PropTypes.string.isRequired,
	platform: PropTypes.string.isRequired
}

export default FeedbackItem;