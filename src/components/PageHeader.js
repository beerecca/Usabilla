import React, { PropTypes } from 'react';

const PageHeader = ({title}) => {
	return (
		<div className="ub-pageheader">
			<h1 className="ub-pageheader--title">{title}</h1>
		</div>
	)
}

PageHeader.PropTypes = {
	title: PropTypes.string.isRequired
}

export default PageHeader;