import React, { PropTypes } from 'react';

const RatingRow = ({rating, label, count}) => {
	return (
		<tr className="ub-table--row">
			<td className="ub-table--cell">
				<div className="ub-rating ub-rating--small ub-margin-right">{rating}</div>
				<span className="ub-text--bold">{label}</span>
			</td>
			<td className="ub-table--cell ub-text--right">
				<p>{count}</p>
			</td>
		</tr>
	)
}

RatingRow.PropTypes = {
	rating: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired
}

export default RatingRow;