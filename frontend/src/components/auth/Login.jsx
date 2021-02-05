import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'
import Loader from '../../layout/loader'


export class Login extends Component {
	state = {
		username: "",
		password: ""
	}

	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	}
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    	this.props.login(this.state.username, this.state.password);
  	};

	render() {
		if (this.props.isAuthenticated) {console.log('isAuthenticated'); return <Redirect to='/'/>}
		const {username, password} = this.state;

		const style= {
			paddingTop: '15px'
		}

		return (
			<center>
			<Loader />
				<form onSubmit={this.onSubmit}>
					<h1>Username</h1>
					<input autoComplete='off' type='text' name='username' value={this.state.username} onChange={this.onChange}/>
					<h1>Password</h1>
					<input type='password' name='password' value={this.state.password} onChange={this.onChange}/>
					<div style={style} className="form-group">
						{this.props.isLoading?<button type="submit" className="btn btn-primary">Loading</button>:<button type="submit" className="btn btn-primary">Login</button>}
					</div>
				</form>
			</center>
			)
	}
}


const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	isLoading: state.auth.isLoading
})

export default connect(mapStateToProps, { login })(Login);