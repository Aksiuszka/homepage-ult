import React from 'react';
import ProjectLogo from './projectslogo';
import SmallProjectsLogo from './smallprojectslogo'

import './ProjectsMenu.css';

function ProjectsMenu() {
    return (
        <div className="menu-container">
            <div className="logo-wrapper">
                <div className="logo-inner-wrapper">
            <ProjectLogo/>
            </div>
            <div className="projects-wrapper">
            <div className="small-projects">
            <SmallProjectsLogo/>
            <div className="smallProjectsContainer">
            <a target="_blank" href="https://astronarium.herokuapp.com/"><div className="card" id="zeroCard">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Astronarium</h3>
                        <h4>Fun space inspired register list made in React JS.</h4>
                        
                    </div>
                </div></a>
                <a target="_blank" href="https://halloweenultimo.herokuapp.com/"><div className="card" id="firstCard">
                    <div className="content">
                        <h2>02</h2>
                        <h3>October Movie Checklist</h3>
                        <h4>Spooky movie checklist made in React JS.</h4>
                       
                    </div>
                </div></a>
                <a target="_blank" href="https://peaceful-bhabha-572b54.netlify.app/"><div className="card" id="secondCard">
                    <div className="content">
                        <h2>03</h2>
                        <h3>Voice recognition</h3>
                        <h4>A fun component recognizing your speech</h4>
                        
                    </div>
                </div></a>
                <a target="_blank" href="https://partycookbook.herokuapp.com/"> <div className="card" id="thirdCard">
                    <div className="content">
                        <h2>04</h2>
                        <h3>Party cookbook</h3>
                        <h4>API based cookbook made in React JS</h4>
                        
                    </div>
                </div></a>
            </div>
            
         
       
            </div>
            
         
            </div>
            </div>
        </div>
    )
}

export default ProjectsMenu
