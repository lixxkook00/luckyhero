import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import TheBestBackgroundEver from './pages/TheBestBackgroundEver';
import Router from './routers/router';

function App() {
  return (
    <div className="App">

      <Header />

      <TheBestBackgroundEver />

      <div className="global-layout">

        <div className="body-layout">
        
          <Router />
        
        </div>
      
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
