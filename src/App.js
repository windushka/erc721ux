import logo from './logo.svg';
import './App.css';
import ChainInfo from "./chain-info";
import FakeBAYC from './fake-bayc';
import FakeNetfurians from './fakeNefturians';

function App() {
  return (
    <div className="App">
     <ChainInfo/>
     <FakeBAYC/>
     <FakeNetfurians/>
    </div>
  );
}

export default App;
