import "./Home.scss";

import { CountryCard, ImgSideText } from "../../components/atoms";
import { Link as RouterLink } from "react-router-dom";


import banner_home from "../../assets/banner_tmp.jpg";
import arCaseStory_Home from "../../data_CaseStory_Home.json";

const Home = () => {
    const home_text = <div>
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

    return <div>
        <ImgSideText text={home_text} img="home_tmp.jpg" img_side="left"/>

        <img src={banner_home} alt="banner_home" className="banner mv-3" />

        <h2 className="mv-2">Countries</h2>

        <div className="carrousel mv-2">
            {arCaseStory_Home.map((el) => {
                return <RouterLink to={`quiz/` + el.name} key={`cardLink_` + el.name}>
                    <CountryCard name={el.name} image={el.img} />
                </RouterLink>
            })}
        </div>
    </div>
}

export default Home;