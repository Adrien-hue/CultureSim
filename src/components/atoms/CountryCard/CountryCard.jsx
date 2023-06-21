import "./CountryCard.scss";

const CountryCard = ({ name, image, ...props }) => {

	let img_src = require(`../../../assets/CAPIRE_logo_transparant.png`);
    if(image !== undefined && image !== ""){
        if(image.includes('http')) {
            img_src = image
        } else {
            img_src = require(`../../../assets/${image}`)
        }
    }

	return (
		<div className="countryCard">
			<div className="countryCard-container">
				<img
					src={img_src}
					alt={name}
					className="countryCard-image"
				/>
			</div>
			<div className="countryCard-details">
				<h3>{name}</h3>
			</div>
		</div>
	);
};

export default CountryCard;
