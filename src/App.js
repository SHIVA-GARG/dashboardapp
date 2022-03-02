import './App.css';
import Topbar from './components/topbar/Topbar'
import { useState } from 'react';
import Leftbar from './components/leftsidebar/Leftbar';
import Rightpart from './components/RightPart/rightPart';
import RightUpperPart from './components/RightPart/RightUpperPart';
import { style } from '@mui/system';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState(['shiva'])
  const handleChange = e => {
    setItem(e.target.value)
  }
  const handleButtonClick = (e) => {
    e.preventDefault();
    setList([...list, item])
    setItem('');
  }
  return (
    <Provider store={store}>
      <div className="App">
        <Topbar />
        <hr />
        <div className="fluid-container-xxl my-md-4 bd-layout">
          <Leftbar />
          <div className="rightpart d-flex flex-column">
            <RightUpperPart />
            <Rightpart />
          </div>

        </div>
        <div style={{ marginBottom: "10px", position: "relative", top: "-20px" }}>
          <h1>{list ? list.map((val, index) => { return (<h1 key={index}>{val}</h1>) }) : ''}</h1>
          <input onChange={e => handleChange(e)} placeholder='add Item' value={item} />
          <button onClick={handleButtonClick}>
            Add in the List+
          </button>

        </div>
      </div>
    </Provider>

  );
}

export default App;
