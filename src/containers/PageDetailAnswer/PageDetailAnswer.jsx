import {useParams} from 'react-router-dom';

import arCaseStory from "../../data.json";

const PageDetailAnswer = () =>{
    // const params_answer = useParams().answer;
    // const data_answer = arCaseStory.find(el => el.String(id) === params_answer);

    const data_answer = arCaseStory[0].answers[0];

    return (
        <div className='country-container'>
            <h1 className='country-title'>Answer Details</h1>
            <div className='country-details'>
                <div className='details-row'>
                    <div className='details-label'>
                        <div className='details-texts'>
                        <p>Answer: {data_answer.interpretation}</p>
                        <p>Comment: {data_answer.comment}</p>
                        <p>Correct answer?: {String(data_answer.isTrue)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageDetailAnswer;
