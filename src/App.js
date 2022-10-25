import './App.css';
import Accordian from './component/Accordian';
import ProfileCv from './component/ProfileCv';
import Progress from './component/Progress';

function App() {
  return (
    <div className="App">
      
      <div className='row'>
        <div className='col-md-3'><ProfileCv/></div>
        <div className='col-md-9'><Accordian/>
        <div className='col-md-9'><Progress/></div></div>
        
      </div>
    </div>
  );
}

export default App;
