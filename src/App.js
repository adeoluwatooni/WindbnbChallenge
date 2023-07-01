
import './App.css';
import Apartments from './components/Apartments';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Apartments />
      <Footer />
    </div>
  );
}

export default App;
