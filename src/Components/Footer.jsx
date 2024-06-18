import React from 'react';
import data from '../Data/data.json'

const Footer = () => {
    return(
        <div id="footer">
            <div>Made with <span style={{color:'red'}}>&#9829;</span> by Kumar Rohit</div>
            <a id="email-account" href={"mailto: "+data.contact.email}>{data.contact.email}</a>
            <ul id="social-links">
                <li className='social-account'><a href={data.contact.linkedin} target="_blank" rel="noreferrer">Linkedin</a></li>
                <li className='social-account'><a href={data.contact.github} target="_blank" rel="noreferrer">Github</a></li>
                <li className='social-account'><a href={data.contact.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
        </div>
    )
}

export default Footer;