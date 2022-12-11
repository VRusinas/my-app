import './App.css';
import Header from './components/header/header';
import Login from './components/login/login';
import RegistrationForm from './components/registration/registration';
import Order from './components/OrderField/Order';
import UserTable from './components/userTable/userTable';
import Preview from './components/preview/preview';

function App() {
  return (
    <div className="App">
       {/* <Header/> */}
       {/* <RegistrationForm/> */}
        <Login/>
        <Order/>
        {/* <h1> {window.id}</h1> */}
        {/* <div>{window.id}</div> */}
        {/* <UserTable/> */}
        {/* <Preview/> */}
    </div>
  );
}

export default App;
