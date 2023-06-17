import "./CountryCard.scss";

const CountryCard = ({name, image, ...props}) => {
    return <div className="countryCard">
        <div className="countryCard-title">{name}</div>
        <img 
            src={require(`../../../assets/` + image)} 
            alt={`Image of ` + name} 
            className="countryCard-image"
        />
    </div>
}

export default CountryCard;