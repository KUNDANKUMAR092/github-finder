import './App.css';

import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users/>
      </div>
    </div>
  );
}

export default App;
