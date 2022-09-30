
import './App.css';
import Header from './components/Header';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReviewCard from './components/ReviewCard';
import AllReviews from './components/AllReviews';
import Categories from './components/Categories';

import Users from './components/Users'
import Home from './components/Home';



import ToggleTheme from './components/ToggleTheme';




function App() {



  return (
    <BrowserRouter>
    
    <div className='App'>
     
      <Header /> 
    <ToggleTheme />
    
      
      <Categories/>          
      <Routes>  
    <Route path='/' element={<Home/>}/>        
    <Route path='/reviews'element={<AllReviews />}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/reviews/:category'element={<AllReviews />}/>
    <Route path='/reviews/singleReview/:review_id' element={<ReviewCard />}/>
    <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
