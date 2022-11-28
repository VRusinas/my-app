import './App.css';
import Header from './components/header/header';
import Login from './components/login/login';
import RegistrationForm from './components/registration/registration';
function App() {
  return (
    <div className="App">
       <Header/>
       <RegistrationForm/>
       <Login/>
    </div>
  );
}

export default App;
