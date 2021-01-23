import './App.css';

import Navbar from './component/layout/Navbar';
import UserItem from './component/users/UserItem';

function App() {
  return (
    <div className="App">
      <Navbar title="Github finder"/>
      <UserItem/>
    </div>
  );
}

export default App;
