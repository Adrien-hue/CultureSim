

import "./CaseStory_Home.scss";
import "../../assets/countryCard_france.jpg"

import { ImgSideText } from "../../components/atoms"; 


    const Login = () => {
        alert("you want to login ");
    }

    const SignUp = () => {
        alert("you want to create an account");
    }



const CaseStory_Home = ({caseStory_Home, ...props}) =>{

    let id = caseStory_Home.id;
    let picture = caseStory_Home.img;
    let name = caseStory_Home.name;
    let text = caseStory_Home.text;
    let pictureSide ="left";

    return <div className="CaseStoryHome-container">

        <h2 className="Title">Culture Simulator {name}: </h2>
        
        <ImgSideText text={text} img={picture} img_side={pictureSide} key={'ImgSideText'+ id}/>
        
        <div className="Buttons">
            <button onClick={SignUp} className="button1"> Sign up for Capire </button>
            <button onClick={Login} className="button2"> Login for Capire </button>  
        </div> 
    </div>
    

}

export default CaseStory_Home;
