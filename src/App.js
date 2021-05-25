import React from 'react';
import axios from 'axios';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';

import './app.scss';

class App extends React.Component {
	render() {
		return (
			<section>
				<Header />
				<Form />
				<Footer />
			</section>
		);
	}
}

export default App;
