import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import './app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			results: null,
			headers: null,
		};
	}
	updateResults = (results, headers, count) => {
		this.setState({ results, headers, count });
	};
	render() {
		return (
			<section>
				<Header />
				<Form updateResults={this.updateResults} />
				<Results count={this.state.count} headers={this.state.headers} results={this.state.results} />
				<Footer />
			</section>
		);
	}
}

export default App;
