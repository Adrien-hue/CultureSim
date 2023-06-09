import "./CS_Interpretation.scss";

import { PTitle } from "../../atoms";

const CS_Interpretation = ({content, title, isTrue, btnFunction, ...props}) => {
    const handleClick = () => {
        let plouf = `this answer is `;

        if(isTrue){
            plouf += `correct`;
        } else {
            plouf += `incorrect`;
        }
        alert(plouf);
    }

    return <button className="CS_interpretation" onClick={btnFunction}>
        <PTitle title={title} content={content} />
    </button>
}

export default CS_Interpretation;