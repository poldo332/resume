import React from 'react';
import ReactDOM from 'react-dom';
import imageUrl from '../assets/images/user-logo.jpg';

const Sidebar = () => {

    const scrollLink = (e) => {
        const navLinks = Array.from(document.getElementsByClassName('nav-link'));
        navLinks.forEach(element => {
            element.classList.remove('active');
        });
        e.currentTarget.children[0].classList.add('active');
        const linkId = e.currentTarget.dataset.id;
        document.getElementById(linkId).scrollIntoView({block: 'start', behavior: 'smooth' });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-resume fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">John Paul Inhog</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile" src={imageUrl} alt="UserImage"/>
                </span>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item" onClick={scrollLink} data-id="about"><a className="nav-link active" >About</a></li>
                    <li className="nav-item" onClick={scrollLink} data-id="experience"><a className="nav-link" >Experience</a></li>
                    <li className="nav-item" onClick={scrollLink} data-id="education"><a className="nav-link" >Education</a></li>
                    <li className="nav-item" onClick={scrollLink} data-id="skills"><a className="nav-link" >Skills</a></li>
                    <li className="nav-item" onClick={scrollLink} data-id="interests"><a className="nav-link" >Interests</a></li>
                    <li className="nav-item" onClick={scrollLink} data-id="awards"><a className="nav-link" >Certifications</a></li>
                </ul>
            </div>
        </nav>
    )
}
 
export default Sidebar;