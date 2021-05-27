import React from 'react';
import './history.scss';
// import ReactJson from 'react-json-view';

class History extends React.Component {
	rePopulateForm = (event) => {
		console.log('History Event:', event.target);
	};

	render() {
		return (
			<div id="history">
				<h2>History</h2>
				<ul>
					{this.props.history.length
						? this.props.history.map((value, index) => (
								<li onClick={this.rePopulateForm} key={index}>
									<span name="route" value={value}>
										{value}
									</span>
								</li>
						  ))
						: 'No history to show.'}
				</ul>
			</div>
		);
	}
}

export default History;
