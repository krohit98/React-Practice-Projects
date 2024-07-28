import React from 'react';
import { ArrowLeftCircle } from 'react-bootstrap-icons';

const Header = (props) => {
    return(
        <div id="header">
            <div id="heading">
                {props.selectedProject && <ArrowLeftCircle onClick={()=>props.setSelectedProject(null)} id="back-btn"/>}
                <div id="main-title">React Practice Projects</div>
            </div>
            {props.selectedProject?
            <>
                <div id="project-title">{props.selectedProject.Title}</div>
                <div id="header-btns">
                    {/* <div id="project-about-btn">About</div> */}
                    {/* <div id="back-btn" onClick={()=>props.setSelectedProject(null)}>Back</div> */}
                </div>
            </>
            :''
            }
        </div>
    )
}

export default Header;