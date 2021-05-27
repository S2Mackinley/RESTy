import React from 'react';
import ReactJson from 'react-json-view';
import './results.scss';
class Results extends React.Component {
	render() {
		return (
			<div id="api-results">
				<div></div>
				<h3>API Results</h3>
				<ReactJson src={this.props.apiResults} />
			</div>
		);
	}
}

export default Results;
