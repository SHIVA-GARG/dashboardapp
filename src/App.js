import './App.css';
import Topbar from './components/topbar/Topbar'

import Leftbar from './components/leftsidebar/Leftbar';
import Rightpart from './components/RightPart/rightPart';
import RightUpperPart from './components/RightPart/RightUpperPart';

function App() {
  return (
    <div className="App">
      <Topbar />
      <hr />
      <div className="fluid-container-xxl my-md-4 bd-layout">
      <Leftbar />
      <div className = "rightpart d-flex flex-column">
        <RightUpperPart/>
      <Rightpart />
      </div>

      </div>

    </div>
  );
}

export default App;
