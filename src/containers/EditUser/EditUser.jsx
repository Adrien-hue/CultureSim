import "./EditUser.scss";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EditUser = () => {
	const navigate = useNavigate();

	const params_user = useParams().id_user;

	const [informationContent, setInformationContent] = useState();
	const [informationClass, _setInformationClass] = useState("form-information");

	const setInformationClass = (customClass) => {
		_setInformationClass(`form-information ${customClass}`);
	};

	let schema;
	if(params_user !== undefined) {
		schema = yup.object().shape({
			id_user: yup.string().required(),
			name_user: yup
				.string()
				.required("Field void, please enter your context !"),
			first_name_user: yup
				.string()
				.required("Field void, please put your comment !"),
			username_user: yup
				.string()
				.required("Field void, please put your comment !"),
			password_user: yup.string().min(8).required("Password has left blank!"),
			mail_user: yup
				.string()
				.email()
				.required("Field void, please put your comment !"),
			access_user: yup.string().required('Access has been left blank'),
			role_user: yup.string().required('Role has been left blank'),
		});
	} else {
		schema = yup.object().shape({
			name_user: yup
				.string()
				.required("Field void, please enter your context !"),
			first_name_user: yup
				.string()
				.required("Field void, please put your comment !"),
			username_user: yup
				.string()
				.required("Field void, please put your comment !"),
			password_user: yup.string().min(8).required("Password has left blank!"),
			mail_user: yup
				.string()
				.email()
				.required("Field void, please put your comment !"),
			access_user: yup.string().required('Access has been left blank'),
			role_user: yup.string().required('Role has been left blank'),
		});
	}

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		let url;

		if(params_user !== undefined) {
			url = `http://localhost:8888/capire_api/public/API/user/update/${data.id_user}`;
		} else {
			url = `http://localhost:8888/capire_api/public/API/user/new`;
		}

		const formData = new FormData();

		formData.append('name_user', data.name_user);
		formData.append('first_name_user', data.first_name_user);
		formData.append('username_user', data.username_user);
		formData.append('password_user', data.password_user);
		formData.append('mail_user', data.mail_user);
		formData.append('access_user', data.access_user);
		formData.append('status_user', data.role_user);

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((response) => {
				if(response.error === 1) {
					setInformationContent(response.message);
					setInformationClass("danger");
				} else {
					setInformationContent(response.message);
					setInformationClass("success");

					setTimeout(() => {
						navigate('../users', {replace: true});
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
	};

	useEffect(() => {
		if(params_user !== undefined) {
			const url = `http://localhost:8888/capire_api/public/API/user/find/${params_user}`;

			fetch(url, {
				method: "GET",
			})
			.then((response) => response.json())
			.then((response) => {
				if(response.error === 1) {
					setInformationContent(response.message);
					setInformationClass("danger");
				} else {
					setValue('name_user', response.user.name_user, { shouldValidate: true });
					setValue('first_name_user', response.user.first_name_user, { shouldValidate: true });
					setValue('username_user', response.user.username_user, { shouldValidate: true });
					setValue('password_user', response.user.password_user, { shouldValidate: true });
					setValue('mail_user', response.user.mail_user, { shouldValidate: true });
					setValue('access_user', response.user.access_user, { shouldValidate: true });
					setValue('role_user', response.user.status_user, { shouldValidate: true });
				}
			})
			.catch((err) => {
				
			});
		}
	}, [params_user, setValue]);

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<h3 className="form-title">User</h3>

			<p className={informationClass}>{informationContent}</p>

			{params_user !== undefined && <input type="hidden" name="id_user" value={params_user} {...register('id_user')}/>}

			<div className="form-input">
                <div className="input-label">Last name *</div>

                <input
					type="text"
					name="name_user"
					placeholder="Last name"
					className="input"
					required
					{...register("name_user")}
				/>
				{errors.name_user && (
					<div className="form-error">
						{errors.name_user.message}
					</div>
				)}
            </div>

			<div className="form-input">
                <div className="input-label">First name *</div>

                <input
					type="text"
					name="first_name_user"
					placeholder="First name"
					className="input"
					required
					{...register("first_name_user")}
				/>
				{errors.first_name_user && (
					<div className="form-error">
						{errors.first_name_user.message}
					</div>
				)}
            </div>

			<div className="form-input">
                <div className="input-label">Username *</div>

                <input
					type="text"
					name="username_user"
					placeholder="Username"
					className="input"
					required
					{...register("username_user")}
				/>
				{errors.username_user && (
					<div className="form-error">
						{errors.username_user.message}
					</div>
				)}
            </div>

			<div className="form-input">
                <div className="input-label">Email *</div>

                <input
					type="email"
					name="mail_user"
					placeholder="Email"
					className="input"
					required
					{...register("mail_user")}
				/>
				{errors.mail_user && (
					<div className="form-error">
						{errors.mail_user.message}
					</div>
				)}
            </div>

			<div className="form-input">
                <div className="input-label">Password *</div>

                <input
					type="password"
					name="password_user"
					placeholder="Password"
					className="input"
					required
					{...register("password_user")}
				/>
				{errors.password_user && (
					<div className="form-error">
						{errors.password_user.message}
					</div>
				)}
            </div>

			<div className="form-input">
                <div className="input-label">Role *</div>

                <select 
                    name="role_user" 
                    id="role_user" 
                    className="input" 
                    required 
                    {...register("role_user")}
                    onChange={(e) => setValue('role_user', e.target.value, { shouldValidate: true })} // Using setValue
                >
                    <option value="">Select an option</option>
                    <option value="Student">Student</option>
						<option value="Teacher">Teacher</option>
						<option value="Professional">Professional</option>
						<option value="Others">Others</option>
                </select>
				{errors.role_user && (
					<div className="form-error">
						{errors.role_user.message}
					</div>
				)}
            </div>

			<div className="form-input">
                <div className="input-label">Access *</div>

                <select 
                    name="access_user" 
                    id="access_user" 
                    className="input" 
                    required 
                    {...register("access_user")}
                    onChange={(e) => setValue('access_user', e.target.value, { shouldValidate: true })} // Using setValue
                >
                    <option value="">Select an option</option>
                    <option value="0">User</option>
					<option value="1">Editor</option>
					<option value="2">Administrator</option>
                </select>
				{errors.access_user && (
					<div className="form-error">
						{errors.access_user.message}
					</div>
				)}
            </div>

			<button type="submit" className="form-submit">
				Save
			</button>
		</form>
	);
};
export default EditUser;
