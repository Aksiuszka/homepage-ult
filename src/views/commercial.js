import React from 'react';
import './projects.css';
import Romb3r from '../assets/romb3r.png';
import Romb2r from '../assets/romb2r.png';
import Romb1r from '../assets/romb1r.png';
import ProjectsMenu2 from '../components/ProjectsMenu2'


function commercial() {
    return (
        <div className="projects-body">
            <div className="left">
    <img className="romb1" id="romb1-top" src={Romb1r} alt="romb"/>
    <img className="romb2" id="romb2-top" src={Romb2r} alt="romb"/>
    <img className="romb3" id="romb3-top" src={Romb3r} alt="romb"/>
  
    
    </div>
  

    <div className="right">
    <img className="romb1" id="romb1-bottom" src={Romb1r} alt="romb"/>
    <img className="romb2" id="romb2-bottom" src={Romb2r} alt="romb"/>
    <img className="romb3" id="romb3-bottom" src={Romb3r} alt="romb"/>
    
    
    </div>
            <div className="menu-contain">
                <div className="logo-container">
           <ProjectsMenu2/>
            </div>
            
            </div>
        </div>
    )
}

export default commercial