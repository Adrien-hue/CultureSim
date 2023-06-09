import "./CaseStory.scss";

import { useState } from "react";
import { PShadow } from "../../atoms";
import { CS_Interpretation } from "../../molecules";

const CaseStory = ({caseStory, updateNavigation, situationIndex, setShowModal, setModalTitle, setModalContent, setModalType, ...props}) => {
    const handleClickInterpretation = (comment, isTrue, situationIndex, updateNavigation) => {
        setModalContent(comment);
        if(isTrue){
            setModalTitle("Congratulation!");
            setModalType("success");
            updateNavigation(situationIndex + 1)
        } else {
            setModalTitle("Try again...");
            setModalType("danger");
        }
        setShowModal(true);
    }

    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    
    let id = caseStory.id;

    let context = caseStory.context;
    let question = caseStory.question;

    let arAnswers = caseStory.answers;

    let customClass = "CaseStory-container";
    if(props.customClass){
        customClass += ` ${props.customClass}`;
    }

    return <div className={customClass}>
        <div className="CaseStory-statement">
            <PShadow content={context} key={`context` + id}/>
            <PShadow content={question} key={`question` + id}/>
        </div>
        <div className="CaseStory-interpretations">
            {arAnswers.map((el, i) => {
                return <CS_Interpretation 
                    content={el.interpretation} 
                    title={`Answer ` + alphabet[i]} 
                    isTrue={el.isTrue} 
                    key={`answer` + alphabet[i] + id}
                    btnFunction={() => handleClickInterpretation(el.comment, el.isTrue, situationIndex, updateNavigation)}
                />
            })}
        </div>
    </div>
}

export default CaseStory;