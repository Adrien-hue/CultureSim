import "./ImgSideText.scss";

const ImgSideText = ({text, img, img_side, ...props}) => {
    let img_className = `imgSideText-img`;
    let p_className = `imgSideText-p`;
    
    if(img_side === 'left'){
        img_className += ` left-element`;
        p_className += ` right-element`;
    } else {
        img_className += ` right-element`;
        p_className += ` left-element`;
    }

    return <div className="imgSideText-container">
        <img src={img} alt="Here is the alt" className={img_className}/>

        <div className={p_className}>{text}</div>
    </div>
}

export default ImgSideText;