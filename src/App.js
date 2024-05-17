import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';


function App() {

  const [flights, setData] = useState();
  const getFlights = async () => {
    
  try {

    const response = await api.get('/api/v1/flights');
    
    console.log(response.data);

    setFlights(response.data);

  } catch (error) {

    console.log(error);
  }

  }

  useEffect(() => {
    getFlights();
  }, []);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>


        </Route>
      </Routes>


 
    </div>
  );
}

export default App;
