import { useParams } from 'react-router-dom';

import './CountryDetails.scss'
import countryData from '../../../data_CaseStory_Home.json'

const CountryDetails = () => {

  const params_country = useParams().country;

  const data_country = countryData.find( el => el.name === params_country);

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
          <img src={require (`../../../assets/` + picture)} alt={`${name} image`} />
        </div>
      </div>
    </div>
  </div>
};


export default CountryDetails;
