import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history/history';

import './app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// count: 0,
			headers: {},
			results: [],
			history: [],
			display: false,
		};
	}

	getApiResults = (apiResults, headers) => {
		this.setState({ headers, results: apiResults });
		if (this.state) {
			this.setState({ display: true });
		}
	};

	getHistory = (history) => {
		this.setState({ history });
	};

	render() {
		console.log('APP STATE:', this.state);
		return (
			<section>
				<Header />
				<Form returnApiResults={this.getApiResults} returnHistory={this.getHistory} />
				<History history={this.state.history} />
				{!this.state.display ? '' : <Results apiResults={this.state} />}
				<Footer />
			</section>
		);
	}
}

export default App;
