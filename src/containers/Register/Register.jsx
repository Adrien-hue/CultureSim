import "./Register.scss";

import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Register() {
	const [gender, setGender] = useState("");
	const [role, setRole] = useState("");

	const schema = yup.object().shape({
		firstname: yup
			.string()
			.required("First name has left blank!"),
		lastname: yup
			.string()
			.required("Last name has left blank!"),
		username: yup
			.string()
			.required("Username has left blank!"),
		email: yup
			.string()
			.email()
			.required("Email has left blank!"),
		emailConfirmation: yup
			.string()
			.oneOf([yup.ref('email'), null], 'Email must match')
			.required("Email confirmation has left blank!"),
		password: yup
			.string()
			.min(8)
			.required("Password has left blank!"),
		passwordConfirmation: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match')
			.required("Password confirmation has left blank!"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => {};

	// const handleChangeGender = (event) => {
	//   setGender(event.target.value);
	// };

	// const handleChangeRole = (event) => {
	//   setRole(event.target.value);
	// };

	const handleClick = () => {
		// implementation details
	};

	return (
		<form className="form register-form" onSubmit={handleSubmit(onSubmit)}>
			<h2 className="form-title">Register</h2>

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
					{errors.firstname && <div className="form-error">{errors.firstname.message}</div>}
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
					{errors.lastname && <div className="form-error">{errors.lastname.message}</div>}
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
					{errors.username && <div className="form-error">{errors.username.message}</div>}
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
					{errors.email && <div className="form-error">{errors.email.message}</div>}
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
					{errors.emailConfirmation && <div className="form-error">{errors.emailConfirmation.message}</div>}
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
					{errors.password && <div className="form-error">{errors.password.message}</div>}
				</div>

				<div className="form-input">
					<label className="input-label">Password confirmation *</label>

					<input 
						type="password" 
						name="passwordConfirmation"
						placeholder="Password"
						className="input"
						required
						{...register("passwordConfirmation")}
					/>
					{errors.passwordConfirmation && <div className="form-error">{errors.passwordConfirmation.message}</div>}
				</div>
			</div>

			<button type="submit" id="register" className="form-submit">Register</button>

			<div className="separator"></div>

			<p className="mv-1">Already an account? <RouterLink to="/login" className="inline-link">Log in here!</RouterLink></p>
		</form>
		// <header>
		//   <form onSubmit={handleSubmit(onSubmit)}>
		//     <div class="con">
		//       <div className="lmj-Sign_up-title">
		//         <h2>Sign Up :</h2>
		//       </div>
		//       <div className="lmj-Sign_up-read">
		//         <p>E-mail :</p>
		//       </div>
		//       <input
		//         className="form-input"
		//         type="email"
		//         name="email"
		//         placeholder="Email"
		//         {...register("email")}
		//       />
		//       {errors.email && (
		//         <div className="error-message">{errors.email.message}</div>
		//       )}
		//       <div className="lmj-Sign_up-read">
		//         <p>Confirm your email :</p>
		//       </div>
		//       <input
		//         className="form-input"
		//         type="text"
		//         name="emailConfirmation"
		//         placeholder="Confirm your email"
		//         {...register("emailConfirmation")}
		//       />
		//       {errors.emailConfirmation && (
		//         <div className="error-message">
		//           {errors.emailConfirmation.message}
		//         </div>
		//       )}
		//       <div className="lmj-Sign_up-read">
		//         <p>First name :</p>
		//       </div>
		//       <input
		//         className="form-input"
		//         type="text"
		//         name="firstname"
		//         placeholder="First name"
		//         {...register("firstname")}
		//       />
		//       {errors.firstname && (
		//         <div className="error-message">{errors.firstname.message}</div>
		//       )}
		//       <div className="lmj-Sign_up-read">
		//         <p>Last name :</p>
		//       </div>
		//       <input
		//         className="form-input"
		//         type="text"
		//         name="lastname"
		//         placeholder="Last name"
		//         {...register("lastname")}
		//       />
		//       {errors.lastname && (
		//         <div className="error-message">{errors.lastname.message}</div>
		//       )}
		//       <div className="lmj-Sign_up-read">
		//         <p>City :</p>
		//       </div>
		//       <input
		//         className="form-input"
		//         type="text"
		//         name="city"
		//         placeholder="Enter the city you live"
		//         {...register("city")}
		//       />
		//       {errors.city && (
		//         <div className="error-message">{errors.city.message}</div>
		//       )}
		//       <div className="lmj-Sign_up-read">
		//         <p>Country :</p>
		//       </div>
		//       <input
		//         className="form-input"
		//         type="text"
		//         name="country"
		//         placeholder="Enter the country you live"
		//         {...register("country")}
		//       />
		//       {errors.country && (
		//         <div className="error-message">{errors.country.message}</div>
		//       )}
		//       <div className="lmj-Sign_up-read">
		//         <p>Company / Institution:</p>
		//       </div>
		//       <input
		//         className="form-input"
		//         type="text"
		//         name="company"
		//         placeholder="Enter your institution or company"
		//         {...register("company")}
		//       />
		//       {errors.company && (
		//         <div className="error-message">{errors.company.message}</div>
		//       )}
		//       <div className="lmj-Sign_up-read">
		//         <p>Gender Identity :</p>
		//       </div>
		//       <br></br>
		//       <input
		//         type="radio"
		//         name="gender"
		//         value="male"
		//         // checked={gender === 'male'}
		//         //onChange={handleChangeGender}
		//         {...register("gender")}
		//       />{" "}
		//       <span className="lmj-Sign_up-check"> Male</span>
		//       {"\u00A0\u00A0"}
		//       <input
		//         type="radio"
		//         name="gender"
		//         value="female"
		//         // checked={gender === 'female'}
		//         // onChange={handleChangeGender}
		//         {...register("gender")}
		//       />{" "}
		//       <span className="lmj-Sign_up-check"> Female</span>
		//       {"\u00A0\u00A0"}
		//       <input
		//         type="radio"
		//         name="gender"
		//         value="others"
		//         //checked={gender === 'others'}
		//         //onChange={handleChangeGender}
		//         {...register("gender")}
		//       />
		//       <span className="lmj-Sign_up-check"> Others</span>
		//       {errors.gender && (
		//         <div className="error-message">{errors.gender.message}</div>
		//       )}
		//       <div className="lmj-Sign_up-read">
		//         <p>Role :</p>
		//       </div>
		//       <br></br>
		//       <input
		//         type="radio"
		//         name="role"
		//         value="student"
		//         // checked={role === 'student'}
		//         // onChange={handleChangeRole}
		//         {...register("role")}
		//       />
		//       <span className="lmj-Sign_up-check"> Student </span>
		//       {"\u00A0\u00A0"}
		//       <input
		//         type="radio"
		//         name="role"
		//         value="teacher"
		//         // checked={role === 'teacher'}
		//         // onChange={handleChangeRole}
		//         {...register("role")}
		//       />{" "}
		//       <span className="lmj-Sign_up-check"> Teacher</span>
		//       {"\u00A0\u00A0"}
		//       <input
		//         type="radio"
		//         name="role"
		//         value="professional"
		//         //checked={role === 'professional'}
		//         //onChange={handleChangeRole}
		//         {...register("role")}
		//       />{" "}
		//       <span className="lmj-Sign_up-check"> Professional</span>
		//       {"\u00A0\u00A0"}
		//       <input
		//         type="radio"
		//         name="role"
		//         value="others"
		//         //checked={role === 'others'}
		//         //onChange={handleChangeRole}
		//         {...register("role")}
		//       />{" "}
		//       <span className="lmj-Sign_up-check"> Others</span>
		//       {errors.role && (
		//         <div className="error-message">{errors.role.message}</div>
		//       )}
		//       <br></br>
		//       <br></br>
		//       <div>
		//         <button
		//           className="lmj-Sign_up-button"
		//           type="submit"
		//           id="submit"
		//           onClick={handleClick}
		//         >
		//           Sign up
		//         </button>
		//       </div>
		//     </div>
		//   </form>
		// </header>
	);
}

export default Register;
