
import './App.css';
import Topbar from './components/topbar/Topbar'
import Navbar from './components/Navbar/Navbar'

import Leftbar from './components/leftsidebar/Leftbar';
import Rightpart from './components/RightPart/rightPart';
function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Navbar/> */}
      <hr />
      <Leftbar />
      <Rightpart />
    </div>
  );
}

export default App;
