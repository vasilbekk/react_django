import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'
import Loader from '../../layout/loader'

import wave_img from '../../assets/images/login/login_wave.png'
import auth_img from '../../assets/images/login/auth_picture.svg'
import profile_img from '../../assets/images/login/profile_picture.svg'


export class Login extends Component {
	state = {
		username: "",
		password: "",
		username_focus: false,
		password_focus: false
	}

	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	}



	onChange = (e) => this.setState({ [e.target.name]: e.target.value })

	onSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    	this.props.login(this.state.username, this.state.password);
  	}

  	onFocus = e => {
  		let name = e.target.name + '_focus'
  		this.setState({[name]: true})

  	}

  	onBlur = e => {
  		let name = e.target.name + '_focus'
  		if (!this.state[e.target.name]) this.setState({[name]: false})
  	}

	render() {
		if (this.props.isAuthenticated) {console.log('isAuthenticated'); return <Redirect to='/'/>}
		const {username, password} = this.state;

		return (
			<Fragment>
			<Loader />
				<img className='login__wave' src={wave_img} />
					<div className="login__container">
						<div className='login__img'>
							<img src={auth_img} />
						</div>
						<div className='login__login-content'>
							<form onSubmit={this.onSubmit}>
								<img className='login__avatar' src={profile_img} />
								
								<h2>кабинет</h2>
								<div className={`login__input-div ${this.state.username_focus?'focus':''}`}>
				           		   <div className="login__i">
				           		   		<i className="fa fa-user"></i>
				           		   </div>
				           		   <div className="login__div">
				           		   		<h5>Логин</h5>
				           		   		<input 
				           		   			type="text" 
				           		   			className="login__input" 
				           		   			name='username' 
				           		   			value={username} 
				           		   			onChange={this.onChange}
				           		   			onFocus={this.onFocus}
				           		   			onBlur={this.onBlur}
				           		   			autoComplete='off'
				           		   			/>
				           		   </div>
				           		</div>
				           		<div className={`login__input-div ${this.state.password_focus?'focus':''}`}>
				           		   <div className="login__i"> 
				           		    	<i className="fa fa-lock"></i>
				           		   </div>
				           		   <div className="login__div">
				           		    	<h5>Пароль</h5>
				           		    	<input 
				           		    		type="password" 
				           		    		className="login__input" 
				           		    		name='password' 
				           		    		value={password} 
				           		    		onChange={this.onChange}
				           		    		onFocus={this.onFocus}
				           		    		onBlur={this.onBlur}
				           		    		/>
				            	   </div>
				            	</div>
								<input type="submit" className='login__btn' value={this.props.isLoading?'Загрузка...':'Войти'} />
								<a style={{textAlign: "center"}} href="/" >Главная страница</a>
							</form>
						</div>
					</div>
			</Fragment>
		)
	}
}


const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	isLoading: state.auth.isLoading
})

export default connect(mapStateToProps, { login })(Login);