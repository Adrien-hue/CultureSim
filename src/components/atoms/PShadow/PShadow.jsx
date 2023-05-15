import "./PShadow.scss";

const PShadow = ({content, ...props}) => {

    let compClass = "PShadow";

    if(props.type !== undefined && props.type === "question"){
        compClass += " PShadow--title";
    }

    return <div className={compClass}>
        <p className="PShadow-p">{content}</p>
    </div>
}

export default PShadow;