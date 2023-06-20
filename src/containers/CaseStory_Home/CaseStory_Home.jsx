

import "./CaseStory_Home.scss";

import { ImgSideText } from "../../components/atoms"; 
import { useParams } from "react-router-dom";

import arCaseStory_Home from "../../data_CaseStory_Home.json";

       const StartGame = () => {
        alert("you want to start the game");
    }



const CaseStory_Home = () => {

    let params_country_name = useParams().country;
    
    let data_country = arCaseStory_Home.find( el => el.name === params_country_name);

    let id = data_country.id;
    let picture = data_country.img;
    let name = data_country.name;
    const pictureSide = "left";
    let text = <div>
    
   

    <p>{data_country.text}</p> <br/>
    <p><strong>Number of cases :</strong> 20 per round</p><br/>
    <p><strong>Duration:</strong> around 20 minutes</p><br/>
        
        
    </div>
    return <div className="CaseStoryHome-container">
         <h2 className="Title">Culture Simulator {name}: </h2>
        <ImgSideText text={text} img={picture} img_side={pictureSide} key={'ImgSideText'+ id}/>

        
        <div className="Buttons">
            <button onClick={StartGame} className="button1">Start the game</button>
             
        </div> 
    </div>
    

}

export default CaseStory_Home;
