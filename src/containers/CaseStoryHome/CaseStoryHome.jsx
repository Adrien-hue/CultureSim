

import "./CaseStoryHome.scss";

import { ImgSideText } from "../../components/atoms"; 
import { useParams, Link } from "react-router-dom";

import { useEffect, useState } from "react";

const CaseStoryHome = () => {

    const [nameCountry, setNameCountry] = useState("");
    const [descCountry, setDescCountry] = useState("");
    const [imageCountry, setImageCountry] = useState("");

    const params_id_country = useParams().id_country;
    
    const pictureSide = "left";

    useEffect(() => {
        const url = `http://localhost:8888/capire_api/public/API/country/findBy/name/${params_id_country}`;

        fetch(url, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.error === 1) {
                
            } else {
                setNameCountry(response.country.name_country)
                setDescCountry(response.country.desc_country)
                setImageCountry(response.country.image_country)
            }
        })
        .catch((err) => {
            
        });
    }, [params_id_country])

    return <div className="CaseStoryHome-container">
        
        <ImgSideText text={descCountry} img={imageCountry} img_side={pictureSide} key={'ImgSideText'+ params_id_country}>
            <h2 className="title">Culture Simulator {nameCountry}: </h2>
            
            <p>{descCountry}</p>

            <Link to="1" className="external_link">Start new game</Link>
        </ImgSideText>
        
    </div>
    

}

export default CaseStoryHome;
