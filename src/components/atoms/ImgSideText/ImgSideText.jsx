import "./ImgSideText.scss";

const ImgSideText = ({children, img, img_side, ...props}) => {
    let img_className = `imgSideText-img`;
    let p_className = `imgSideText-p`;

    let img_src = require(`../../../assets/CAPIRE_logo_transparant.png`);
    if(img !== undefined && img !== ""){
        if(img.includes('http')) {
            img_src = img
        } else {
            img_src = require(`../../../assets/${img}`)
        }
    }

    if(img_side === 'left'){
        img_className += ` left-element`;
        p_className += ` right-element`;
    } else {
        img_className += ` right-element`;
        p_className += ` left-element`;
    }

    return <div className="imgSideText-container">

        <img src={img_src} alt="Side illustration" className={img_className} />

        <div className={p_className}>{children}</div>
    </div>
}

export default ImgSideText;