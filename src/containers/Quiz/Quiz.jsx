import "./Quiz.scss";

import { Modal } from "../../components/molecules";
import { CaseStory } from "../../components/organisms";

import arCaseStory from "../../data.json";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Quiz = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState();
    const [modalContent, setModalContent] = useState();
    const [modalType, setModalType] = useState();

    const [caseStory, setCaseStory] = useState(arCaseStory[0]);
    const [tabsActive, setTabsActive] = useState(0)
    const [navigationStep, _setNavigationStep] = useState(0);

    const setNavigationStep = (situationIndex) => {
        if(situationIndex > navigationStep){
            _setNavigationStep(situationIndex);
        }
    }

    const handleClickNavigation = (index) => {
        setTabsActive(index);
        setCaseStory(arCaseStory[index]);
    }

    const handleExplanation = (explanation) => {
        setModalTitle(`Explanation`);
        setModalContent(explanation);
        setModalType(null);
        setShowModal(true);
    }

    const previousTabs = tabsActive - 1;
    const nextTabs = tabsActive + 1;

    return <div className="tabs">
        <div className="tabs-nav">
            {arCaseStory.map((el, i) => {
                let btnClass = "nav-button";

                if(i == tabsActive){
                    btnClass += " active"
                }

                let isDisabled = (i <= navigationStep) ? false : true;

                return <button className={btnClass} onClick={() => handleClickNavigation(i)} key={`btn-tab-nav` + i} disabled={isDisabled}>{`Q. ` + (i + 1)}</button>
            })}
        </div>

        <CaseStory 
            caseStory={caseStory} 
            className="tab-content" 
            updateNavigation={setNavigationStep} 
            situationIndex={tabsActive} 
            setShowModal={setShowModal} 
            setModalTitle={setModalTitle} 
            setModalContent={setModalContent}
            setModalType={setModalType}
        />

        <div className="tabs-actions">
            <div>
                {tabsActive != 0 && <button className="button-action" onClick={() => handleClickNavigation(previousTabs)}>Previous</button>}
            </div>
            <div>
                {navigationStep > tabsActive && <button className="button-action" onClick={() => handleExplanation(caseStory.explanation)}>Show explanation</button>}
            </div>
            <div>
                {tabsActive != (arCaseStory.length - 1) && navigationStep > tabsActive && <button className="button-action" onClick={() => handleClickNavigation(nextTabs)}>Next</button>}
            </div>
        </div>

        {showModal && <Modal title={modalTitle} content={modalContent} type={modalType} showModal={setShowModal} />}
    </div>
}

export default Quiz;