import React from 'react';

const Header = (props) => {
    return(
        <div id="header">
            <div id="main-title">React Practice Projects</div>
            {props.selectedProject?
            <>
                <div id="project-title">{props.selectedProject.Title}</div>
                <div id="header-btns">
                    {/* <div id="project-about-btn">About</div> */}
                    <div id="back-btn" onClick={()=>props.setSelectedProject(null)}>Back</div>
                </div>
            </>
            :''
            }
        </div>
    )
}

export default Header;