import './CountryDetails.scss'

const CountryDetails = () => {

  let picture = "france.png";
  let name = "france";
  let text = "bleu";

  return <div className="details-container">
    <h1 className="details-title">{name}</h1>

    <div className="details">
      <div className="details-row">
        <div className="details-label">
          Country name :
        </div>
        <div className="details-name">
          {name}
        </div>
      </div>

      <div className="details-row">
        <div className="details-label">
          Country description :   
        </div>
        <div className="details-text">
          {text}
        </div>
      </div>

      <div className="details-row">
        <div className="details-label">
          Country image :
        </div>
        <div className="details-img">
          <img src={require (`../../../assets/` + picture)} alt={`${name}`} />
        </div>
      </div>
    </div>
  </div>
};


export default CountryDetails;
