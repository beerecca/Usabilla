import React, { PropTypes } from 'react';
import cn from 'classnames';
import { ratingValues } from '../const/const';

const RatingFilter = ({toggleRating, selectedRatings}) => {
	return (
		<span>
			{Object.keys(ratingValues).map(rating => {
				const classNames = cn('ub-rating', {'ub-rating--inactive': !selectedRatings.has(rating)});
				return <div key={rating} onClick={() => toggleRating(rating)} className={classNames}>{rating}</div>
			})}
		</span>
	)
}

RatingFilter.PropTypes = {
	toggleRating: PropTypes.func.isRequired,
	selectedRatings: PropTypes.array.isRequired
}

export default RatingFilter;