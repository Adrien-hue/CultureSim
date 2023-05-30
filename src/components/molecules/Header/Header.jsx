import "./Header.scss";

import { Link as RouterLink } from "react-router-dom";

import logo_capire from "../../../assets/CAPIRE_logo.jpg"
import logo_ue from "../../../assets/EU.jpg";

const Header = () => {
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
                <a href='#'>EN</a>, <a href='#'>PL</a>, <a href='#'>FR</a>, <a href='#'>NL</a>, <a href='#'>IT</a>, <a href='#'>DE</a>
            </div>

            <a className='navItem' href='#'>Login</a>
        </nav>
  </header>
}

export default Header;