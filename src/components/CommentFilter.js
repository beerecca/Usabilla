import React, { PropTypes } from 'react';

const CommentFilter = ({query, filterComments}) => {
	return <input 
		className="ub-input ub-margin-right-large ub-margin-bottom ub-padding-left"
		type="text"
		placeholder="Search here!"
		aria-label="Filter Feedback"
		value={query}
		onChange={e => filterComments(e.target.value)} />
}

CommentFilter.PropTypes = {
	query: PropTypes.string.isRequired,
	filterComments: PropTypes.func.isRequired
}

export default CommentFilter;