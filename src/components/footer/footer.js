import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<p data-testid="footer">&copy; Elijah Prom 2021 Code Fellows</p>
			</div>
		);
	}
}

export default Footer;
