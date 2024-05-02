import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';

function App() {

  const [flights, setData] = useState([]);
  const getFlights = async () => {
    
  try {

    const response = await api.get('/api/v1/flights');
    
    console.log(response.data);

    setData(response.data);

  } catch (error) {

    console.log(error);
  }

  }

  useEffect(() => {
    getFlights();
  }, []);

  return (
    <div className="App">
 
    </div>
  );
}

export default App;
