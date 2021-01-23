import './App.css';

import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';

function App() {
  return (
    <div className="App">
      <Navbar title="Github finder"/>
      <div className="container">
        <Users/>
      </div>
    </div>
  );
}

export default App;
