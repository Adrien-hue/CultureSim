import logo from './logo.svg';
import './App.scss';

import arCase_story from "./data.json";

import { CountryCard } from './components/atoms';

import { CaseStory } from './containers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is CultureSim!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

			<main>
				<CountryCard name="France" image="countryCard_france.jpg"/> 
				<CountryCard name="Allemagne" image="countryCard_dutch.jpg"/> 
				<CountryCard name="Italie" image="countryCard_italia.jpg"/> 
				<CountryCard name="Pays-bas" image="countryCard_nederland.jpg"/> 
				<CountryCard name="Pologne" image="countryCard_poland.jpg"/>

        {arCase_story.map((data) => {
          return <CaseStory caseStory={data}/>
        })}

			</main>
    </div>
  );
}

export default App;
