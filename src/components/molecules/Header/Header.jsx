import "./Header.scss";

import { Link as RouterLink } from "react-router-dom";
import { ImgSideText, Dropdown } from "../../atoms";

import logo_capire from "../../../assets/CAPIRE_logo_transparant.png"
import img_user from "../../../assets/user.png"

import { useContext } from "react";
import AuthContext from "../../../contexts/AuthProvider";


const Header = () => {

    const { auth } = useContext(AuthContext);

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

    return <header className="app-header">
        <RouterLink to={`/`}>
            <section className="header-brand">
                <img className="brand-logo" src={logo_capire} alt="logo capire" />

                <div className="brand-infos">
                    <h1>Culture Sim</h1>

                    <p>Understanding other cultures</p>
                </div>
            </section>
        </RouterLink>

        <nav className="header-nav">
            {auth.hasOwnProperty('id_user')
                ? <RouterLink to={`/profil`} className="nav-link">
                    <img src={img_user} alt="Account image" className="link-img" />
                    Account
                </RouterLink>
                : <RouterLink to={`/login`} className="nav-link">
                    <img src={img_user} alt="Account image" className="link-img" />
                    Login
                </RouterLink>}

            <Dropdown title="Language" content={arCompCountryFlags} className="nav-link" />
        </nav>
  </header>
}

export default Header;