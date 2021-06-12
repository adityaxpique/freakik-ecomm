import './App.css';
// import firebase from 'firebase';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  // const firebaseApp = firebase.apps[0];
  return (
    <div className="App">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
