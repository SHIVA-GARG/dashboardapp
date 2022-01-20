
import './App.css';
import Topbar from './components/topbar/Topbar'
import Navbar from './components/Navbar/Navbar'

import Leftbar from './components/leftsidebar/Leftbar';
function App() {
  return (
    <div className="App">
     <Topbar/>
     {/* <Navbar/> */}
     <hr/>
     <Leftbar/>
     
    </div>
  );
}

export default App;
