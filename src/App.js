
import React from 'react';
import './App.css';
import Romb1 from './assets/romb3.png';
import Romb2 from './assets/romb2.png';
import Romb3 from './assets/romb1.png';
import Menu from './components/Menu';





function App() {
  return (
    <div className="App">
   <div className="left">
    <img className="romb1" id="romb1-top" src={Romb1} alt="romb"/>
    <img className="romb2" id="romb2-top" src={Romb2} alt="romb"/>
    <img className="romb3" id="romb3-top" src={Romb3} alt="romb"/>
  
    
    </div>
  

    <div className="right">
    <img className="romb1" id="romb1-bottom" src={Romb1} alt="romb"/>
    <img className="romb2" id="romb2-bottom" src={Romb2} alt="romb"/>
    <img className="romb3" id="romb3-bottom" src={Romb3} alt="romb"/>
    
    
    </div>
    <div className="menu-contain">
      <Menu/>
    </div>
    </div>
  );
}

export default App;
