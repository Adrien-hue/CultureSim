import "./Modal.scss";

const Modal = ({title, content, footer="", type="", showModal, ...props}) => {
    let footerCustomClass = "modal-footer";
    let headerCustomClass = "modal-header";

    if(type === "success"){
        footerCustomClass += " success";
        headerCustomClass += " success";
    } else if (type === "danger") {
        footerCustomClass += " danger";
        headerCustomClass += " danger";
    }

    return <div id="Modal" className="modal">
        <div className="modal-content">
            <div className={headerCustomClass}>
                <span id="Modal-close" className="close" onClick={() => showModal(false)}>&times;</span>
                <h2>{title}</h2>
            </div>
            <div className="modal-body">
                {content}
            </div>
            <div className={footerCustomClass}>
                {footer}
            </div>
        </div>
    </div>
}

export default Modal;