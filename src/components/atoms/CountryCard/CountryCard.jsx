import "./CountryCard.scss";

const CountryCard = ({ name, image, ...props }) => {
	return (
		<div className="countryCard">
			<div className="countryCard-container">
				<img
					src={require(`../../../assets/` + image)}
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
