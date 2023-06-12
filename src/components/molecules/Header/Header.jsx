import "./Header.scss";

import { Link as RouterLink } from "react-router-dom";

import logo_capire from "../../../assets/CAPIRE_logo.jpg"
import logo_ue from "../../../assets/EU.jpg";
import { Dropdown, ImgSideText } from "../../atoms";

const Header = () => {

    const data_CountriesFlags = [
           
        {
            name:"French", 
            code: "FR",
            flag: "france.png"
        },

        {
            name:"Deutsch",
            code:"GM",
            flag: "allemagne.png"
        },
        {
            name:"Italian",
            code:"IT",
            flag: "italie.png"
        },
        {
            name:"Dutch",
            code:"NL",
            flag: "pays-bas.png"
        },
        {
            name:"Polish",
            code:"PL",
            flag: "pologne.png"
        }
    ]

    const arCompCountryFlags = data_CountriesFlags.map((item) => {
        return <ImgSideText text={item.code} img={item.flag} img_side='left'/>
    })

    return <header className="App-header">
        <div className='headerPresentation'>
            <RouterLink to={`/`}>
                <div className="brandContainer">
                    <img className="item headerImg" src={logo_capire} alt="logo_capire" title="Accueil" />

                    <div className="brandInfos">
                        <h1 className='item brandName'>CAPIRE</h1>

                        <p className='item'>Understanding other cultures</p>
                    </div>
                </div>
            </RouterLink>
        
            <img className="item headerImg" src={logo_ue} alt="logo_europe_union"/>
        </div>
        
        
        <nav className='navHeader'>
            <div className='navItem'>
                <div className="Countries_Flags">
                    <Dropdown title="Language" content={arCompCountryFlags} />
                </div>
                
            </div>

            <a className='navItem' href='#'>Login</a>
        </nav>
  </header>
}

export default Header;