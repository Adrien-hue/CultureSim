import "./CountryCard.scss";

const CountryCard = ({name, image, ...props}) => {
    return <div className="countryCards">
        <div className="countryCard">
            <div className="countryCard-container">
                <img 
                    src={require(`../../../assets/` + image)} 
                    alt={`Image of ` + name} 
                    className="countryCard-image"
                />
            </div>
                <div className="countryCard-details">
                    <h3>{name}</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis modi fuga veniam est dolor praesentium aperiam commodi laboriosam doloremque cupiditate, libero, sapiente nulla fugit beatae.</p>
                </div>
        </div>
    </div>
}

export default CountryCard;