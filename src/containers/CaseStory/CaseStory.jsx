import "./CaseStory.scss";

import { PShadow, PTitle } from "../../components/atoms";

const CaseStory = ({caseStory, ...props}) => {
    let context = caseStory.context;
    let question = caseStory.question;

    let answerA = caseStory.answerA.interpretation;
    let answerB = caseStory.answerB.interpretation;
    let answerC = caseStory.answerC.interpretation;
    let answerD = caseStory.answerD.interpretation;

    return <div className="CaseStory-container">
        <div className="CaseStory-statement">
            <PShadow content={context}/>
            <PShadow content={question} type= "question"/>
        </div>
        <div className="CaseStory-interpretations">
            <PTitle content={answerA} title="Answer A"/>
            <PTitle content={answerB} title="Answer B"/>
            <PTitle content={answerC} title="Answer C"/>
            <PTitle content={answerD} title="Answer D"/>
        </div>
        
    </div>
}

export default CaseStory;