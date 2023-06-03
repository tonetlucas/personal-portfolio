import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Work />
      <WorkProcess />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
