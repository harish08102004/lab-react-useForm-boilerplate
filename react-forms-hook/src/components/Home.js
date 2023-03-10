import './Homes.css';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Registration from './Registration';

function Home() { 
  return (
    <div className="App">
      <div className='nav'>
        <h5>Kalvium</h5>
        <div className='info'>
          <h5>Contact</h5>
          <NavLink to= "/"><h5>Home</h5></NavLink>
          <NavLink to="/Registration"><h5>Register</h5></NavLink>
        </div>
      </div>
        <div>
          <Routes>
            <Route path='/Registration' element={<Registration />} />
            <Route path='/' element ={<Home/>}></Route>
          </Routes>
        </div>
      
    </div>
  );
}

export default Home;