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

	handleMethod = (e) => {
		e.preventDefault();
		let method = e.target.value;
		this.setState({ method: method });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let history = this.state.history;
		history.push(`${this.state.method}: ${this.state.url}`);
		this.setState({ history });
	};

	render() {
		const history = this.state.history.map((item, index) => <li key={index}>{item}</li>);
		return (
			<section>
				<div>
					<form>
						<input type="text" placeholder="Enter your URL" onChange={(e) => this.setState({ url: e.target.value })} />
						<button onClick={this.handleSubmit}>Send</button>
					</form>
					<button className="rest-b" onClick={this.handleMethod} value="Get">
						GET
					</button>
					<button className="rest-b" onClick={this.handleMethod} value="Post">
						POST
					</button>
					<button className="rest-b" onClick={this.handleMethod} value="Put">
						PUT
					</button>
					<button className="rest-b" onClick={this.handleMethod} value="Delete">
						DELETE
					</button>
					<div>
						<ul>{history}</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Form;
