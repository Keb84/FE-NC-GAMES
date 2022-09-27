
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import AllReviews from './components/AllReviews';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header /> 
      <Nav />
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/reviews'element={<AllReviews />}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
