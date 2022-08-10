import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainComponent from './Components/MainComponent';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App" >
    
        <Welcome />
        <Header/>
        <Footer/>
        <MainComponent/>
    </div>
  );
}

export default App;
