import "./Register.scss";

import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../hooks";

function Register() {
	const { setAuth } = useAuth();

	const navigate = useNavigate();

	const [informationContent, setInformationContent] = useState();
	const [informationClass, _setInformationClass] = useState("form-information");

	const setInformationClass = (customClass) => {
		_setInformationClass(`form-information ${customClass}`);
	};

	const schema = yup.object().shape({
		firstname: yup.string().required("First name has left blank!"),
		lastname: yup.string().required("Last name has left blank!"),
		username: yup.string().required("Username has left blank!"),
		status: yup.string("").required("Status has left blank!"),
		email: yup.string().email().required("Email has left blank!"),
		emailConfirmation: yup
			.string()
			.oneOf([yup.ref("email"), null], "Email must match")
			.required("Email confirmation has left blank!"),
		password: yup.string().min(8).required("Password has left blank!"),
		passwordConfirmation: yup
			.string()
			.oneOf([yup.ref("password"), null], "Passwords must match")
			.required("Password confirmation has left blank!"),
	});

	const { register, setValue, handleSubmit, formState: { errors }, } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		const firstname = data.firstname;
		const lastname = data.lastname;
		const username = data.username;
		const email = data.email;
		const emailConfirmation = data.emailConfirmation;
		const password = data.password;
		const passwordConfirmation = data.passwordConfirmation;
		const status = data.status;

		if(firstname !== "" && lastname !== "" && username !== "" && email !== "" && emailConfirmation !== "" && password !== "" && passwordConfirmation !== "" && status !== "") {
			if(email !== emailConfirmation) {
				setInformationContent("Emails do not match!");
				setInformationClass("danger");
				return;
			}

			if(password !== passwordConfirmation) {
				setInformationContent("Passwords do not match!");
				setInformationClass("danger");
				return;
			}

			const url = `http://localhost:8888/capire_api/public/API/user/register`;

			const headers = {
				"Accept": "application/json",
				"Content-type": "application/json",
			};

			const data = {
				name_user: lastname,
				first_name_user: firstname,
				username_user: username,
				password_user: password,
				mail_user: email,
				status_user: status
			}

			fetch(url, {
				method: "PUT",
				headers: headers,
				body: JSON.stringify(data),
			})
			.then((response) => response.json())
			.then((response) => {
				if(response.error === 1) {
					setInformationContent(response.message);
					setInformationClass("danger");
				} else {
					setInformationContent(response.message);
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
			return;
		}
	};

	return (
		<form className="form register-form" onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Register</h2>

			<p className={informationClass}>{informationContent}</p>

			<div className="flex flex_space-btw">
				<div className="form-input">
					<label className="input-label">First name *</label>

					<input
						type="text"
						name="firstname"
						placeholder="First name"
						className="input"
						required
						{...register("firstname")}
					/>
					{errors.firstname && (
						<div className="form-error">
							{errors.firstname.message}
						</div>
					)}
				</div>

				<div className="form-input">
					<label className="input-label">Last name *</label>

					<input
						type="text"
						name="lastname"
						placeholder="Last name"
						className="input"
						required
						{...register("lastname")}
					/>
					{errors.lastname && (
						<div className="form-error">
							{errors.lastname.message}
						</div>
					)}
				</div>
			</div>

			<div className="flex flex_space-btw">
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
						<div className="form-error">
							{errors.username.message}
						</div>
					)}
				</div>

				<div className="form-input">
					<div className="input-label">Status *</div>

					<select 
						name="sel_status" 
						id="sel_status" 
						className="input" 
						required 
						{...register("status")}
						onChange={(e) => setValue('status', e.target.value, { shouldValidate: true })} // Using setValue
					>
						<option value="">Select an option</option>
						<option value="Student">Student</option>
						<option value="Professional">Professional</option>
						<option value="Personal">Personal</option>
						<option value="Other">Other</option>
					</select>
				</div>
			</div>

			<div className="flex flex_space-btw">
				<div className="form-input">
					<label className="input-label">Email *</label>

					<input
						type="email"
						name="email"
						placeholder="Email"
						className="input"
						required
						{...register("email")}
					/>
					{errors.email && (
						<div className="form-error">{errors.email.message}</div>
					)}
				</div>

				<div className="form-input">
					<label className="input-label">Email confirmation *</label>

					<input
						type="text"
						name="emailConfirmation"
						placeholder="Email"
						className="input"
						required
						{...register("emailConfirmation")}
					/>
					{errors.emailConfirmation && (
						<div className="form-error">
							{errors.emailConfirmation.message}
						</div>
					)}
				</div>
			</div>

			<div className="flex flex_space-btw">
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
						<div className="form-error">
							{errors.password.message}
						</div>
					)}
				</div>

				<div className="form-input">
					<label className="input-label">
						Password confirmation *
					</label>

					<input
						type="password"
						name="passwordConfirmation"
						placeholder="Password"
						className="input"
						required
						{...register("passwordConfirmation")}
					/>
					{errors.passwordConfirmation && (
						<div className="form-error">
							{errors.passwordConfirmation.message}
						</div>
					)}
				</div>
			</div>

			<button type="submit" id="register" className="form-submit">
				Register
			</button>

			<div className="separator"></div>

			<p className="mv-1">
				Already an account?{" "}
				<RouterLink to="/login" className="inline-link">
					Log in here!
				</RouterLink>
			</p>
		</form>
	);
}

export default Register;
