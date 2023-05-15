import logo from './logo.svg';
import './App.scss';

import arCase_story from "./data.json";

import { CountryCard, PShadow, PTitle } from './components/atoms';

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

        {arCase_story.map( (data) => {
          return <div key={`case_story` + data.id}>
            <PShadow content={data.context} key={`context` + data.id} />
            <PShadow content={data.question} type="question" key={`question` + data.id} />
            <PTitle title="Answer A" content={data.answerA.interpretation} />
            <PTitle title="Answer B" content={data.answerB.interpretation} />
            <PTitle title="Answer C" content={data.answerC.interpretation} />
            <PTitle title="Answer D" content={data.answerD.interpretation} />
          </div>
        })}

			</main>
    </div>
  );
}

export default App;
