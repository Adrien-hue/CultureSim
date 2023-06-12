import "./Header.scss";

import { Link as RouterLink } from "react-router-dom";

import logo_capire from "../../../assets/CAPIRE_logo_transparant.png"
import img_user from "../../../assets/user.png"
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthProvider";

const Header = () => {
    const { auth } = useContext(AuthContext);

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

        <section className="header-nav">
            {auth.hasOwnProperty('id_user')
                ? <RouterLink to={`/profil`} className="nav-link">
                    <img src={img_user} alt="Account image" className="link-img" />
                    Account
                </RouterLink>
                : <RouterLink to={`/login`} className="nav-link">
                    <img src={img_user} alt="Account image" className="link-img" />
                    Login
                </RouterLink>}
        </section>
  </header>
}

export default Header;