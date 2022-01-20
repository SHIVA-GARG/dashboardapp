
import './App.css';
import Topbar from './components/topbar/Topbar'
import Navbar from './components/Navbar/Navbar'

import Leftbar from './components/leftsidebar/Leftbar';
import Rightpart from './components/RightPart/rightPart';
import styled from '@emotion/styled';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Navbar/> */}
      <hr />
      <div className='lowerpart'>
      <Leftbar />
      <Rightpart />
      </div>

    </div>
  );
}

export default App;
