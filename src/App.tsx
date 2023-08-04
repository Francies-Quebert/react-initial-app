import logo from './assets/logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from './lib/axios';

function App() {

  useEffect(() => {



    (async () => {

      // const options = {
      //   method: 'GET',
      //   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      //   params: {model: 'corolla'},
      //   headers: {
      //     'X-RapidAPI-Key': '52bb8091aamsh914b5d9a1401020p14caf7jsnd98145f1e65c',
      //     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      //   }
      // };

      // try {
      //   const response = await axios.request(options);
      //   console.log(response.data);
      // } catch (error) {
      //   console.error(error);
      // }

      // console.log(process.env.REACT_APP_RapidAPI_Key, process.env.REACT_APP_RapidAPI_HOST)
      try {
        const response = await axios.get('cars', {
          params: { model: 'corolla', limit: 50 }
        });
        console.log(response.data, 'DATATA');
      } catch (error) {
        console.error(error);
      }
    })()


  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
