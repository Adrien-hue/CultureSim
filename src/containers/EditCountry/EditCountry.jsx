// import "./EditCountry.scss";s
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";

const EditCountry = () => {
	const navigate = useNavigate();

	const params_country = useParams().id_country;

	const [informationContent, setInformationContent] = useState();
	const [informationClass, _setInformationClass] = useState("form-information");

	const setInformationClass = (customClass) => {
		_setInformationClass(`form-information ${customClass}`);
	};

	let schema;
	if(params_country !== undefined) {
		schema = yup.object().shape({
			name: yup
				.string()
				.required("Field void, please enter your country !"),
			description: yup
				.string()
				.required("Field void, please enter your description !"),
			image: yup.mixed().required("Field void, please put your photo !"),
			id_country: yup.string().required(),
			updated_image: yup.string().required()
			
		});
	} else {
		schema = yup.object().shape({
			name: yup
				.string()
				.required("Field void, please enter your country !"),
			description: yup
				.string()
				.required("Field void, please enter your description !"),
			image: yup.mixed().required("Field void, please put your photo !"),
			
		});
	}

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		let url;
		if(params_country !== undefined){
			url = `http://localhost:8888/capire_api/public/API/country/update/${data.id_country}`
		} else {
			url = `http://localhost:8888/capire_api/public/API/country/new`;
		}

		const formData = new FormData();

		formData.append('name_country', data.name);
		formData.append('desc_country', data.description);
		formData.append('image_country', data.image);

		if(params_country !== undefined) {
			formData.append('updated_image', data.updated_image);
		}

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

		if(params_country !== undefined) {
			setValue('updated_image', '1', { shouldValidate: true })
		}

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

	useEffect(() => {
		if(params_country !== undefined) {
			const url = `http://localhost:8888/capire_api/public/API/country/find/${params_country}`;

			fetch(url, {
				method: "GET",
			})
			.then((response) => response.json())
			.then((response) => {
				if(response.error === 1) {
					setInformationContent(response.message);
					setInformationClass("danger");
				} else {
					let image_name = response.country.image_country.split('/');
					image_name = String(image_name.slice(-1));

					setValue('name', response.country.name_country, { shouldValidate: true });
					setValue('description', response.country.desc_country, { shouldValidate: true });
					setValue('image', image_name, { shouldValidate: false });
					setPreviewSrc(response.country.image_country);
				}
			})
			.catch((err) => {
				
			});
		}
	}, [params_country, setValue]);

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<h3 className="form-title">Country</h3>

			<p className={informationClass}>{informationContent}</p>

			{params_country !== undefined && <input type="hidden" name="id_country" value={params_country} {...register("id_country")} />}
			{params_country !== undefined && <input type="hidden" name="updated_image" value="0" {...register("updated_image")} />}

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
				/>

				{previewSrc && (
					<img
						src={previewSrc}
						alt="Preview"
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