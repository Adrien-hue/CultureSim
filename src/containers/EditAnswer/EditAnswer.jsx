import "./EditAnswer.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Switch } from "../../components/atoms";

const EditAnswer = () => {

    const [informationContent, setInformationContent] = useState();
	const [informationClass, _setInformationClass] = useState("form-information");

    const [case_storyOpt, setCase_storyOpt] = useState([]);
    const [answerTrue, setAnswerTrue] = useState(false);

    const navigate = useNavigate();

	const setInformationClass = (customClass) => {
		_setInformationClass(`form-information ${customClass}`);
	};

	let schema = yup.object().shape({
        sel_case_story: yup.string().required('Situation has been left blank'),
		answer: yup.string().required("Answer has been left blank!"),
		comment: yup.string().required("Comment has been left blank!"),
	});

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        let url = `http://localhost:8888/capire_api/public/API/answer/new`;

        const formData = new FormData();

        formData.append('id_case_story', data.sel_case_story);
        formData.append('interpretation_answer', data.answer);
        formData.append('is_true_answer', (answerTrue) ? 1 : 0);
        formData.append('comment_answer', data.comment);

        for(var pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
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
						navigate('../answers', {replace: true});
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
        fetch(`http://localhost:8888/capire_api/public/API/case_story/all`, {
			method: "GET",
		})
        .then((response) => response.json())
        .then((response) => {
            setCase_storyOpt(response.data);
        })
        .catch((err) => {});
    }, [])

	return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="form-title">Answer</h3>

            <p className={informationClass}>{informationContent}</p>

            <div className="form-input">
                <div className="input-label">Situation *</div>

                <select 
                    name="sel_case_story" 
                    id="sel_case_story" 
                    className="input" 
                    required 
                    {...register("sel_case_story")}
                    onChange={(e) => setValue('sel_case_story', e.target.value, { shouldValidate: true })} // Using setValue
                >
                    <option value="">Select an option</option>
                    {case_storyOpt.map((el) => {
                        return <option value={el.id_case_story}>{el.question_case_story}</option>
                    })}
                </select>
            </div>

            <div className="form-input">
				<label className="input-label">Answer *</label>

				<input
					type="text"
					name="answer"
					placeholder="Answer"
					className="input"
					required
					{...register("answer")}
				/>
				{errors.answer && (
					<div className="form-error">
						{errors.name.message}
					</div>
				)}
			</div>

            <div className="form-input switch">
				<label className="input-label">Is true ? *</label>

                <Switch isOn={answerTrue} handleToggle={() => setAnswerTrue(!answerTrue)} />
			</div>

            <div className="form-input">
				<label className="input-label">Comment *</label>

				<input
					type="text"
					name="comment"
					placeholder="Comment"
					className="input"
					required
					{...register("comment")}
				/>
				{errors.comment && (
					<div className="form-error">
						{errors.comment.message}
					</div>
				)}
			</div>

            <button type="submit" className="form-submit">
				Save
			</button>
        </form>
    )
};

export default EditAnswer;
