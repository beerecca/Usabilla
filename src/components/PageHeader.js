import React, { PropTypes } from 'react';

const PageHeader = ({title, icon}) => {
	return (
		<div className="ub-pageheader ub-margin-bottom-large">
			{icon}
			<h1 className="ub-pageheader--title">{title}</h1>
		</div>
	)
}

PageHeader.PropTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.object
}

export default PageHeader;