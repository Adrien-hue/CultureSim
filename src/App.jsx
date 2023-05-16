import logo_capire from './assets/CAPIRE_logo.jpg';
import logo_ue from './assets/EU.jpg';
import './App.scss';

import arCase_story from "./data.json";

import { CountryCard } from './components/atoms';

import { CaseStory } from './containers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='headerPresentation'>
          <div className="brandContainer">
            <img className="item headerImg" src={logo_capire} alt="logo_capire" title="Accueil" />

            <div className="brandInfos">
              <h1 className='item brandName'>CAPIRE</h1>

              <p className='item'>Understanding other cultures</p>
            </div>
          </div>
          
          <img className="item headerImg" src={logo_ue}/>
        </div>
        
        
        <nav className='navHeader'>
          <div className='navItem'>
            <a href='#'>EN</a>, <a href='#'>PL</a>, <a href='#'>FR</a>, <a href='#'>NL</a>, <a href='#'>IT</a>, <a href='#'>DE</a>
          </div>

          <a className='navItem' href='#'>Login</a>
        </nav>
      </header>

			<main>
				<CountryCard name="France" image="countryCard_france.jpg"/> 
				<CountryCard name="Allemagne" image="countryCard_dutch.jpg"/> 
				<CountryCard name="Italie" image="countryCard_italia.jpg"/> 
				<CountryCard name="Pays-bas" image="countryCard_nederland.jpg"/> 
				<CountryCard name="Pologne" image="countryCard_poland.jpg"/>

        {arCase_story.map((data) => {
          return <CaseStory caseStory={data} key={`caseStory` + data.id}/>
        })}

			</main>

      <footer className='App-footer'>
        <div className='footerPresentation'>
          <div className='Item footer1'>
            <div><a href="#">About</a></div>
            <div><a href="#">Business</a></div>
            <div><a href="#">Affilates</a></div>
            <div><a href="#">Careers</a></div>
            <div><a href="#">News</a></div>
          </div>

          <div className='Item footer2'>
            <div><a href="#">Legal issues</a></div>
            <div><a href="#">Term of use</a></div>
            <div><a href="#">Privacy</a></div>
            <div><a href="#">Copyright</a></div>
            <div><a href="#">Accessability</a></div>
            <div><a href="#">Other</a></div>
          </div>

          <div className='Item footer3'>
            <div><a href="#">Contact us</a></div>
            <div><a href="#">Teaching</a></div>
            <div><a href="#">Help centre</a></div>
            <div><a href="#">Editorial board</a></div>
            <div><a href="#">Reviews</a></div>
            <div><a href="#">Manual</a></div>
            <div><a href="#">Partners</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;