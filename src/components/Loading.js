import React from 'react';

const Loading = () => {
	return (
		<div className="ub-panel ub-padding-large">
			<div className="ub-loader ub-text--center">
				<div className="ub-loader--dot"></div>
				<div className="ub-loader--dot"></div>
				<div className="ub-loader--dot"></div>
			</div>
		</div>
	)
}

export default Loading;