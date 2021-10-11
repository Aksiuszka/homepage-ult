import React from 'react';
import ProjectLogo from './projectslogo';
import BigProjectsLogo from './bigprojectslogo';
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
            <BigProjectsLogo/>
            <div className="smallProjectsContainer">
            <a target="_blank" href="https://github.com/Aksiuszka/witchesbrew"> <div className="card" id="zeroCard">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Witches' Brew</h3>
                        <h4>I'M CURRENTLY WORKING ON THAT ONE!</h4>
                        
                    </div>
                </div></a>
                <a target="_blank" href="https://github.com/Aksiuszka/witchesbrew"> <div className="card" id="firstCard">
                    <div className="content">
                        <h2>02</h2>
                        <h3>Beauty Business Ranking</h3>
                        <h4>The project is under construction </h4>
                       
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
