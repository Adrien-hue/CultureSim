import "./Login.scss";

import React, { useState, useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {
	const { setAuth } = useContext(AuthContext);

	const navigate = useNavigate();

	const [informationContent, setInformationContent] = useState();
	const [informationClass, _setInformationClass] =
		useState("form-information");

	const setInformationClass = (customClass) => {
		_setInformationClass(`form-information ${customClass}`);
	};

	const schema = yup.object().shape({
		username: yup.string().required("Username has left blank!"),
		password: yup.string().required("Password has left blank!"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		const user = data.username;
		const password = data.password;

		if (user !== "" && password !== "") {
			const url = `http://localhost:8888/capire_api/public/API/user/login`;

			const headers = {
				Accept: "application/json",
				"Content-type": "application/json",
			};

			const data = {
				user: user,
				password: password,
			};

			fetch(url, {
				method: "POST",
				headers: headers,
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.then((response) => {
					if (response.error === 1) {
						setInformationContent("Invalid username or password");
						setInformationClass("danger");
					} else {
						setInformationContent(
							"Loggedin successfully! Redirection..."
						);
						setInformationClass("success");
						const id_user = response.user.id_user;
						const user_access = response.user.access_user;
						const username = response.user.username_user;

						setAuth({ id_user: id_user, username: username, user_access: user_access });

						setTimeout(() => {
							navigate("/");
						}, 1500);
					}
				})
				.catch((err) => {
					if (!err?.response) {
						setInformationContent("No server response");
						setInformationClass("danger");
					} else {
						setInformationContent(
							"An error occured! Please contact an admin."
						);
						setInformationClass("danger");
					}
				});
		} else {
			setInformationContent("All fields are required!");
			setInformationClass("danger");
		}
	};

	return (
		<form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Login</h2>

			<p className={informationClass}>{informationContent}</p>

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
				{errors.username && (
					<div className="form-error">{errors.username.message}</div>
				)}
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
				{errors.password && (
					<div className="form-error">{errors.password.message}</div>
				)}
			</div>

			<button type="submit" id="submit" className="form-submit">
				Login
			</button>

			<div className="separator"></div>

			<p className="mv-1">
				Not registered yet?{" "}
				<RouterLink to="/register" className="inline-link">
					Create an account now!
				</RouterLink>
			</p>
		</form>
	);
}
export default Login;
