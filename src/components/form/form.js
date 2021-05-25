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

	handleURL = (e) => {
		let url = e.target.value;
		this.setState({ url });
	};

	handleSelect = (e) => {
		e.preventDefault();
		let method = e.target.value;
		this.setState({ method: method });
	};

	handleSend = (e) => {
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
						<button onClick={this.handleSend}>Send</button>
					</h2>

					<button className="restb" onClick={this.handleSelect} value="GET">
						GET
					</button>
					<button className="restb" onClick={this.handleSelect} value="POST">
						POST
					</button>
					<button className="restb" onClick={this.handleSelect} value="PUT">
						PUT
					</button>
					<button className="restb" onClick={this.handleSelect} value="DELETE">
						DELETE
					</button>
					<ul>{history}</ul>
				</div>
			</section>
		);
	}
}

export default Form;
