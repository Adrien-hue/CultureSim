import "./Login.scss";

import React from 'react';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function Login() {
	const naviget = useNavigate();

	const schema = yup.object().shape({
		username: yup.string().required('Username has left blank!'),
		password: yup.string().required('Password has left blank!')
	});

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	}


	return (
		<form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Login</h2>

			<div className="form-input">
				<label className="input-label">Username *</label>

				<input 
					type="text" 
					name="username"
					placeholder="Username"
					className="input"
					required
					{...register("username")}
				/>
				{errors.username && <div className="form-error">{errors.username.message}</div>}
			</div>

			<div className="form-input">
				<label className="input-label">Password *</label>

				<input 
					type="password" 
					name="password"
					placeholder="Password"
					className="input"
					required
					{...register("password")}
				/>
				{errors.password && <div className="form-error">{errors.password.message}</div>}
			</div>

			<button type="submit" id="submit" className="form-submit">Login</button>

			<div className="separator"></div>

			<p className="mv-1">Not registered yet? <RouterLink to="/register" className="inline-link">Create an account now!</RouterLink></p>
		</form>
	);
}
export default Login