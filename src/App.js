import './App.css';
import Header from './components/header/header';
import Login from './components/login/login';
import RegistrationForm from './components/registration/registration';
import Order from './components/OrderField/Order';

function App() {
  return (
    <div className="App">
       {/* <Header/>
       <RegistrationForm/> */}
        <Login/>
        {/* <Order/> */}
        {/* <h1> {window.id}</h1> */}
        <div>{window.id}</div>
    </div>
  );
}

export default App;
