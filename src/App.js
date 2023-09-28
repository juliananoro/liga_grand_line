import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Liga Grand Line!
        </p>
      </header>
    </div>
    </>
  );
}

export default App;
