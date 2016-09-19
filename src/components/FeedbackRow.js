import React, { PropTypes } from 'react';

const FeedbackRow = ({rating, comment, labels, browserName, browserVersion, device, platform}) => {
	return (
		<tr className="ub-table--row">
			<td className="ub-table--cell">
				<div className="ub-rating">{rating}</div>
			</td>
			<td className="ub-table--cell ub-text--left">
				<p>{comment}</p>
				{labels.map(label => <span key={label} className="ub-label">{label}</span>)}
			</td>
			<td className="ub-table--cell">
				<p>{browserName}</p>
				<p>{browserVersion}</p>
			</td>
			<td className="ub-table--cell">
				<p>{device}</p>
			</td>
			<td className="ub-table--cell">
				<p>{platform}</p>
			</td>
		</tr>
	)
}

FeedbackRow.PropTypes = {
	rating: PropTypes.number.isRequired,
	comment: PropTypes.string.isRequired,
	labels: PropTypes.array.isRequired,
	browserName: PropTypes.string.isRequired,
	browserVersion: PropTypes.string.isRequired,
	device: PropTypes.string.isRequired,
	platform: PropTypes.string.isRequired
}

export default FeedbackRow;