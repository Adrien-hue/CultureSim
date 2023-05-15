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
    </div>
  );
}

export default App;
