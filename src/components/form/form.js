import React from 'react';
import './form.scss';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			method: 'Please select an option to use',
			history: [],
		};
	}

	getApiResults = async (route) => {
		const url = this.state.url;
		let headers = {};
		const apiResults = await fetch(url, { method: route, mode: 'cors' }).then((response) => {
			// or let data = await apiResults.json();
			if (response.status !== 200) return;
			for (let pair of response.headers.entries()) {
				headers[pair[0]] = pair[1];
				// this.setState({ headers: headers});
			}
			return response.json();
		});
		// console.log('API RESULTS on FORM:', apiResults, headers);
		this.props.returnApiResults(apiResults, headers);
	};

	handleURL = (e) => {
		let url = e.target.value;
		this.setState({ url });
	};

	handleMethod = (e) => {
		e.preventDefault();
		let method = e.target.value;
		this.setState({ method: method });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let history = this.state.history;
		history.push(`${this.state.method}:${this.state.url}`);
		this.setState({ history });
	};

	render() {
		const history = this.state.history.map((potato) => <li>{potato}</li>);
		return (
			<section>
				<div>
					<h2>
						<input type="text" placeholder="Enter your URL" onChange={this.handleURL} />
						<button onClick={this.handleSubmit}>Send</button>
					</h2>

					<button className="rest-b" onClick={this.handleMethod} value="GET">
						GET
					</button>
					<button className="rest-b" onClick={this.handleMethod} value="POST">
						POST
					</button>
					<button className="rest-b" onClick={this.handleMethod} value="PUT">
						PUT
					</button>
					<button className="rest-b" onClick={this.handleMethod} value="DELETE">
						DELETE
					</button>
					<ul>{history}</ul>
				</div>
			</section>
		);
	}
}

export default Form;
