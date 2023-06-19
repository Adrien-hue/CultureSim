// import "./EditCountry.scss";s
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const EditCountry = () => {
	const navigate = useNavigate();

	const [informationContent, setInformationContent] = useState();
	const [informationClass, _setInformationClass] = useState("form-information");

	const setInformationClass = (customClass) => {
		_setInformationClass(`form-information ${customClass}`);
	};

	const schema = yup.object().shape({
		name: yup
			.string()
			.required("Field void, please enter your country !"),
		description: yup
			.string()
			.required("Field void, please enter your description !"),
		image: yup.mixed().required("Field void, please put your photo !"),
		
	});

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data.file);

		const url = `http://localhost:8888/capire_api/public/API/country/new`;

		const formData = new FormData();

		formData.append('name_country', data.name);
		formData.append('desc_country', data.description);
		formData.append('image_country', data.image);

		fetch(url, {
			method: "POST",
			// headers: headers,
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
						navigate('../countries', {replace: true});
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


	const [previewSrc, setPreviewSrc] = useState("");

	const handleFileChange = (event) => {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setPreviewSrc(reader.result);
			};
			reader.readAsDataURL(file);

			setValue('image', file, { shouldValidate: true })
		} else {
			setValue('image', null, { shouldValidate: true })
			setPreviewSrc("");
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<h3 className="form-title">Country</h3>

			<p className={informationClass}>{informationContent}</p>

			<div className="form-input">
				<label className="input-label">Name *</label>

				<input
					type="text"
					name="name"
					placeholder="Name"
					className="input"
					required
					{...register("name")}
				/>
				{errors.name && (
					<div className="form-error">
						{errors.name.message}
					</div>
				)}
			</div>

			<div className="form-input">
				<label className="input-label">Description *</label>

				<input
					type="text"
					name="description"
					placeholder="Description"
					className="input"
					required
					{...register("description")}
				/>
				{errors.description && (
					<div className="form-error">
						{errors.description.message}
					</div>
				)}
			</div>

			<div className="form-input">
				<label className="input-label">Image *</label>

				<input
					type="file"
					id="image"
					name="image"
					accept="image/*"
					className="input"
					onChange={(ev) => {handleFileChange(ev)}}
					required
				/>

				{previewSrc && (
					<img
						src={previewSrc}
						alt="Aperçu de la photo"
						style={{
							display: "block",
							height: "100px",
							width: "100px",
						}}
					/>
				)}
				{errors.description && (
					<div className="form-error">
						{errors.description.message}
					</div>
				)}
			</div>

			<button type="submit" className="form-submit">
				Save
			</button>
		</form>
	);
}
export default EditCountry;