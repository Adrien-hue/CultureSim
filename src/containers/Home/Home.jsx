import "./Home.scss";

import { CountryCard, ImgSideText } from "../../components/atoms";
import { Link as RouterLink } from "react-router-dom";


import banner_home from "../../assets/banner_tmp.jpg";

import { useEffect, useState } from "react";

const Home = () => {
    const [countriesData, setCountriesData] = useState([]);

    const home_text = (
    <div>
        <p>
            The CAPIRE project aims at exchanging knowledge between the partners and jointly developing an innovative method: building a digital intercultual training tool that is called a Culture Simulator. This tool challenges students, business people and private persons with realistic intercultural workplace situations which they have to solve. It provides them with explanations and further cultural background information.<br />
            Summarising, this project and the tool that will be created will help Europeans to better understand cultural differences.
            <br />
            <br />
            This website presents five Culture Simulators for France, Poland, Italy, Germany and the Netherlands.
            <br />
            <br />
            <a href="https://crocusinstitute.org" className="external_link">More info on the CAPIRE project</a>
        </p>

    </div>
    );
    
    useEffect(() => {
        const url = `http://localhost:8888/capire_api/public/API/country/findLast/5`;

        fetch(url, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.error === 1) {
                
            } else {
                setCountriesData(response.data);
            }
        })
        .catch((err) => {
            
        });
    }, []);

    return <div>
        <ImgSideText img="home_tmp.jpg" img_side="left">
            <p>{home_text}</p>
        </ImgSideText>

        <img src={banner_home} alt="banner_home" className="banner mv-3" />

        <h2 className="mv-2">Countries</h2>

        <div className="countryCards mv-2">
            {countriesData.map((country) => {
                return <RouterLink to={`quiz/` + country.name_country} key={`cardLink_` + country.name_country}>
                    <CountryCard name={country.name_country} image={country.image_country} />
                </RouterLink>
            })}
        </div>
    </div>
}

export default Home;