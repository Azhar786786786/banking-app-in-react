//import logo from './logo.svg';
import './App.css';
import { Authenticate } from './Components/Authenticate';
import { LoginPage } from './Components/LoginPage';

function App() {
  return (
    <div className="App">

      {/* <img src={logo} className="App-logo" alt="logo" />
      <h1>This is banking app created by Azhar Hussain Khan</h1> */}
{/* <LoginPage /> */}
<Authenticate />

    </div>
  );
}

export default App;
