import React, { PropTypes } from 'react';
import cn from 'classnames';

const Table = ({columns, children, className}) => {
	return (
		<table className={cn('ub-table', className)}>
			<thead className="ub-table--head">
				<tr>
					{columns.map(column => {
						return <th key={column} className="ub-table--title">{column}</th>
					})}
				</tr>
			</thead>
			<tbody className="ub-table--body">
				{children}
			</tbody>
		</table>
	)
}

Table.PropTypes = {
	columns: PropTypes.array.isRequired,
	className: PropTypes.string
}

export default Table;