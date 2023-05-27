import "./Home.scss";
import { CountryCard, ImgSideText } from "../../components/atoms";
import img_home from "../../assets/home_tmp.jpg";
import banner_home from "../../assets/banner_tmp.jpg";

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
        <ImgSideText text={home_text} img={img_home} img_side="left"/>

        <img src={banner_home} alt="banner_home" className="mv-3" style={{width: 100 + '%'}}/>

        <h2 className="mv-2">Countries</h2>

        <div className="flex flex_space-ard mv-2">
            <CountryCard name="France" image="countryCard_france.jpg"/> 
            <CountryCard name="Allemagne" image="countryCard_dutch.jpg"/> 
            <CountryCard name="Italie" image="countryCard_italia.jpg"/> 
            <CountryCard name="Pays-bas" image="countryCard_nederland.jpg"/> 
            <CountryCard name="Pologne" image="countryCard_poland.jpg"/>
        </div>
    </div>
}

export default Home;