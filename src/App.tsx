import './reset.scss';
import './Styles/App.scss';
import Navigation from './Components/Navigation/Navigation';
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
