import React from 'react';

const PageHeader = ({title}) => {
	return (
		<div className="ub-pageheader">
			<h1 className="ub-pageheader--title">{title}</h1>
		</div>
	)
}

PageHeader.PropTypes = {
	title: React.PropTypes.string.isRequired
}

export default PageHeader;