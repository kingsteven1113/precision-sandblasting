import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
    </Routes>
    <Footer></Footer>   
    </BrowserRouter>
    </div>
  );
}

export default App;
