import React from 'react';

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
	rating: React.PropTypes.number.isRequired,
	comment: React.PropTypes.string.isRequired,
	browserName: React.PropTypes.string.isRequired,
	browserVersion: React.PropTypes.string.isRequired,
	device: React.PropTypes.string.isRequired,
	platform: React.PropTypes.string.isRequired
}

export default FeedbackItem;