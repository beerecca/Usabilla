import React from 'react';
import cn from 'classnames';

const RatingFilters = ({toggleRating, selectedRatings}) => {
	const ratings = [1,2,3,4,5];
	return (
		<div>
			{ratings.map(rating => {
				const classNames = cn('ub-rating', {'ub-rating--inactive': !selectedRatings.has(rating)});
				return <div onClick={() => toggleRating(rating)} className={classNames}>{rating}</div>
			})}
		</div>
	)
}

RatingFilters.PropTypes = {
	toggleRating: React.PropTypes.func.isRequired
}

export default RatingFilters;