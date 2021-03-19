import React from 'react';
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
                    <li className="nav-item" onClick={scrollLink} data-id="about" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <div className="nav-link active">About</div>
                    </li>
                    <li className="nav-item" onClick={scrollLink} data-id="experience" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <div className="nav-link">Experience</div>
                    </li>
                    <li className="nav-item" onClick={scrollLink} data-id="education" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <div className="nav-link">Education</div>
                    </li>
                    <li className="nav-item" onClick={scrollLink} data-id="skills" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <div className="nav-link">Skills</div>
                    </li>
                    <li className="nav-item" onClick={scrollLink} data-id="interests" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <div className="nav-link">Interests</div>
                    </li>
                    <li className="nav-item" onClick={scrollLink} data-id="awards" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <div className="nav-link">Certifications</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
 
export default Sidebar;