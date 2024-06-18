import React from 'react';
import data from '../Data/data.json'

const Home = (props) => {

    function selectProjectHandler(e){
        if(e.target.className === "project-link")
            props.setSelectedProject({Title:e.target.dataset.title})
    }

    return(
        <div id="home">
            <div id="about">
                Hi there! <br />
                {data.about}
                <br /><br />
                <a href="#footer">Contact me for any feedback.</a>
            </div>
            <div id="project-links" onClick={(e)=>selectProjectHandler(e)}>
                {data.projects.map((project, id) => {
                    return(
                        <div className="project-link" data-title={project.Title} key={id}>{project.Title}</div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Home;