import logo from './assets/logo.svg';
import './App.css';
import { Counter } from './component/Counter';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Counter />
      <Link to={'home/1?abc=sadsad&cde=asdsa'} >Home Page</Link>
      <Outlet/>
    </div>
  );
}

export default App;
