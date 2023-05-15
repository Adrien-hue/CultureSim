import "./CaseStory.scss";

import { PShadow } from "../../components/atoms";
import { CS_Interpretation } from "../../components/molecules";

const CaseStory = ({caseStory, ...props}) => {
    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    
    let id = caseStory.id;

    let context = caseStory.context;
    let question = caseStory.question;

    let arAnswers = caseStory.answers;

    return <div className="CaseStory-container">
        <div className="CaseStory-statement">
            <PShadow content={context} key={`context` + id}/>
            <PShadow content={question} type= "question" key={`question` + id}/>
        </div>
        <div className="CaseStory-interpretations">
            {arAnswers.map((el, i) => {
                return <CS_Interpretation content={el.interpretation} title={`Answer ` + alphabet[i]} isTrue={el.isTrue} key={`answer` + alphabet[i] + id}/>
            })}
        </div>
        
    </div>
}

export default CaseStory;