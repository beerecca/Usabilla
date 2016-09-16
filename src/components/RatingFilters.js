import React, { PropTypes } from 'react';
import cn from 'classnames';

const RatingFilters = ({toggleRating, selectedRatings}) => {
	const ratings = [1,2,3,4,5];
	return (
		<span>
			{ratings.map(rating => {
				const classNames = cn('ub-rating', {'ub-rating--inactive': !selectedRatings.has(rating)});
				return <div key={rating} onClick={() => toggleRating(rating)} className={classNames}>{rating}</div>
			})}
		</span>
	)
}

RatingFilters.PropTypes = {
	toggleRating: PropTypes.func.isRequired
}

export default RatingFilters;