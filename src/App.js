import './App.css';
import Header from './components/Header'
import Features from './components/Feature'
import Services from './components/Service'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <div className="App">
       <Header/>     
     <Features/>
     <Services/>
     <Subscribe/>
    </div>
  );
}

export default App;
