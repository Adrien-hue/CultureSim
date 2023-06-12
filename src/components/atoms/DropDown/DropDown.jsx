import "./Dropdown.scss";

import caret from "../../../assets/caret_down.png";

import { useState } from "react";

const Dropdown = ({title, content, ...props}) => {

    const [isOpen, setIsOpen] = useState(false);

    return <div className="DropDown">
        <button onClick={()=>setIsOpen((prev) => !prev) } className="DropDown_btn">
            {title}
            <img src={caret} alt="Dropdown caret" className={`caret ${isOpen ? "caret-up" : "caret-down"}`} />
        </button>
        {isOpen && (
            <div className="Drop">
                {content.map( (item, el) => {
                    return <div className="Drop_Item" key={el}>
                        {item}
                    </div>
                })}
            </div>
        )}
    </div>
}

export default Dropdown;