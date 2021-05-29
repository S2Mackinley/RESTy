import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import './form.scss';

class Form extends Component {
	render() {
		return (
			<div className="form-div">
				<form data-testid="api-form" onSubmit={this.props.submitHandler}>
					<div className="url">
						<label htmlFor="url"> URL: &nbsp; </label>
						<input
							data-testid="url"
							type="text"
							name="url"
							value={this.props.url}
							onChange={this.props.changeHandler}
						/>
						&nbsp;
						<button>
							{' '}
							<FaSearch></FaSearch>{' '}
						</button>
					</div>
					<div className="radio-container">
						<input
							data-testid="get"
							type="radio"
							name="method"
							value="GET"
							id="get"
							checked={this.props.method === 'GET'}
							onChange={this.props.changeHandler}
						/>
						<label htmlFor="get"> GET </label>
						<input
							data-testid="post"
							type="radio"
							name="method"
							value="POST"
							id="post"
							checked={this.props.method === 'POST'}
							onChange={this.props.changeHandler}
						/>
						<label htmlFor="post"> POST </label>
						<input
							data-testid="put"
							type="radio"
							name="method"
							value="PUT"
							id="put"
							checked={this.props.method === 'PUT'}
							onChange={this.props.changeHandler}
						/>
						<label htmlFor="put"> PUT </label>
						<input
							data-testid="delete"
							type="radio"
							name="method"
							value="DELETE"
							id="delete"
							checked={this.props.method === 'DELETE'}
							onChange={this.props.changeHandler}
						/>
						<label htmlFor="delete"> DELETE </label>
					</div>
					<div className="txt-area">
						<label htmlFor="body">Body:</label>
						<br></br>
						<br></br>
						<textarea
							id="body"
							onChange={this.props.changeHandler}
							data-testid="body"
							name="body"
							cols="57"
							rows="5"
						></textarea>
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
