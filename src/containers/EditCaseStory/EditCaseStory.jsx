import "./EditCaseStory.scss";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EditCaseStory = () => {

    const navigate = useNavigate();

    const params_case_story = useParams().id_case_story;

    const [informationContent, setInformationContent] = useState();
	const [informationClass, _setInformationClass] = useState("form-information");

    const setInformationClass = (customClass) => {
		_setInformationClass(`form-information ${customClass}`);
	};

    const [countryOpt, setCountryOpt] = useState([]);

    let schema;

    if(params_case_story !== undefined) {
        schema = yup.object().shape({
            id_case_story: yup.string().required(),
            sel_country: yup.string().required('Country has been left blank'),
            context: yup.string().required('Context has been left blank'),
            question: yup.string().required('Question has been left blank'),
            explanation: yup.string().required('Explanation has been left blank')
        })
    } else {
        schema = yup.object().shape({
            sel_country: yup.string().required('Country has been left blank'),
            context: yup.string().required('Context has been left blank'),
            question: yup.string().required('Question has been left blank'),
            explanation: yup.string().required('Explanation has been left blank')
        })
    }

    const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        let url;
        if(params_case_story !== undefined) {
            url = `http://localhost:8888/capire_api/public/API/case_story/update/${data.id_case_story}`;
        } else {
            url = `http://localhost:8888/capire_api/public/API/case_story/new`;
        }

        const formData = new FormData();

        formData.append('context_case_story', data.context);
        formData.append('question_case_story', data.question);
        formData.append('explanation_case_story', data.explanation);
        formData.append('id_country', data.sel_country);

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
						navigate('../case_stories', {replace: true});
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
    }

    useEffect(() => {
        fetch(`http://localhost:8888/capire_api/public/API/country/all`, {
			method: "GET",
		})
        .then((response) => response.json())
        .then((response) => {
            setCountryOpt(response.data);
        })
        .catch((err) => {});

        if(params_case_story !== undefined) {
			const url = `http://localhost:8888/capire_api/public/API/case_story/find/${params_case_story}`;

			fetch(url, {
				method: "GET",
			})
			.then((response) => response.json())
			.then((response) => {
				if(response.error === 1) {
					setInformationContent(response.message);
					setInformationClass("danger");
				} else {
					setValue('sel_country', response.case_story.id_country, { shouldValidate: true });
					setValue('context', response.case_story.context_case_story, { shouldValidate: true });
					setValue('question', response.case_story.question_case_story, { shouldValidate: true });
					setValue('explanation', response.case_story.explanation_case_story, { shouldValidate: true });
				}
			})
			.catch((err) => {
				
			});
		}
    }, [params_case_story, setValue]);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="form-title">Case story</h3>

            <p className={informationClass}>{informationContent}</p>

            {params_case_story !== undefined && <input type="hidden" name="id_case_story" value={params_case_story} {...register('id_case_story')}/>}

            <div className="form-input">
                <div className="input-label">Country *</div>

                <select 
                    name="sel_country" 
                    id="sel_country" 
                    className="input" 
                    required 
                    {...register("sel_country")}
                    onChange={(e) => setValue('sel_country', e.target.value, { shouldValidate: true })} // Using setValue
                >
                    <option value="">Select an option</option>
                    {countryOpt.map((el) => {
                        return <option value={el.id_country}>{el.name_country}</option>
                    })}
                </select>
            </div>

            <div className="form-input">
				<label className="input-label">Context *</label>

				<input
					type="text"
					name="context"
					placeholder="Context"
					className="input"
					required
					{...register("context")}
				/>
				{errors.context && (
					<div className="form-error">
						{errors.context.message}
					</div>
				)}
			</div>

            <div className="form-input">
				<label className="input-label">Question *</label>

				<input
					type="text"
					name="question"
					placeholder="Question"
					className="input"
					required
					{...register("question")}
				/>
				{errors.question && (
					<div className="form-error">
						{errors.question.message}
					</div>
				)}
			</div>

            <div className="form-input">
				<label className="input-label">Explanation *</label>

				<input
					type="text"
					name="explanation"
					placeholder="Explanation"
					className="input"
					required
					{...register("explanation")}
				/>
				{errors.explanation && (
					<div className="form-error">
						{errors.explanation.message}
					</div>
				)}
			</div>

            <button type="submit" className="form-submit">
				Save
			</button>
        </form>
    )
}

export default EditCaseStory;