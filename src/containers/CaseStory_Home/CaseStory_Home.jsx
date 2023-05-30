

import "./CaseStory_Home.scss";
import "../../assets/countryCard_france.jpg"

import { ImgSideText } from "../../components/atoms"; 


       const StartGame = () => {
        alert("you want to start the game");
    }



const CaseStory_Home = ({caseStory_Home, ...props}) =>{

    let id = caseStory_Home.id;
    let picture = caseStory_Home.img;
    let name = caseStory_Home.name;
    // let text = caseStory_Home.text;

    let text = <div>
        <p>{caseStory_Home.text}</p> <br/>
        <p><strong>Number of cases :</strong> 20 per round</p><br/>
        <p><strong>Duration:</strong> around 20 minutes</p><br/>
        
        
    </div>
    let pictureSide ="left";

    return <div className="CaseStoryHome-container">

        <h2 className="Title">Culture Simulator {name}: </h2>
        
        <ImgSideText text={text} img={picture} img_side={pictureSide} key={'ImgSideText'+ id}/>
        
        <div className="Buttons">
            <button onClick={StartGame} className="button1">Start the game</button>
             
        </div> 
    </div>
    

}

export default CaseStory_Home;
