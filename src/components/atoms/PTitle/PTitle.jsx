import "./PTitle.scss"

const PTitle = ({title, content, ...props}) => {
    return <div className="PTitle">
        <div className="PTitle-title">{title}</div>
        <div className="PTitle-p">{content}</div>
    </div>
}

export default PTitle;