import React, { PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const RatingChart = ({feedback}) => {

	//Create an array of dates and average ratings
	const ratingAverages = feedback.reduce((array, item, i) => {
		const currentItemDate = moment(item.creation_date * 1000).format('D MMM');

		const existingDate = array.find(obj => obj.date === currentItemDate);
	
		if (existingDate) {
			const newVal = {
				...existingDate,
				total: existingDate.total + item.rating,
				length: existingDate.length + 1,
				average: ((existingDate.total + item.rating) / (existingDate.length + 1)).toFixed(2)
			};
			return array.filter(obj => obj.date !== currentItemDate).concat(newVal);
		} else {
			return array.concat({
				date: currentItemDate,
				total: item.rating,
				length: 1,
				average: item.rating.toFixed(2)
			});
		}
	}, []);

	const ratingData = ratingAverages.map(obj => obj.average).reverse();
	const chartLabels = ratingAverages.map(obj => obj.date).reverse();

	const chartData = {
		yLabels: [1,2,3,4,5],
	    xLabels: chartLabels,
	    datasets: [
	        {
	            data: ratingData
	        }
	    ]
	};

	const chartOptions = {
		maintainAspectRatio: false,
		tooltips: {
			enabled: false
		},
		legend: {
			display: false
		},
		elements: {
			line: {
				tension: 0,
				borderColor: '#00A5C9',
				fill: false
			},
			point: {
				backgroundColor: '#00A5C9',
				radius: 5,
				hoverRadius: 7
			}
		},
		scales: {
			yAxes: [{
				ticks: {
					min: 1,
					max: 5,
					stepSize: 1,
					fontFamily: 'MiloWeb-Text, Helvetica, sans-serif',
					fontSize: 16,
					padding: 30
				},
				gridLines: {
					drawTicks: false,
					drawBorder: false
				}
			}],
			xAxes: [{
				ticks: {
					fontFamily: 'MiloWeb-Text, Helvetica, sans-serif',
					fontSize: 16,
					padding: 20,
					maxRotation: 0
				},
				gridLines: {
					display: false,
					drawBorder: false
				}
			}]
		}
    };

	return <Line data={chartData} options={chartOptions} />;
}

RatingChart.PropTypes = {
	feedback: PropTypes.array.isRequired
}

export default RatingChart;
