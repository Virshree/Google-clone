
import { Route,Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<SearchPage  />}/>
        </Routes>
       
      </div>

     </BrowserRouter>
  );
}

export default App;
