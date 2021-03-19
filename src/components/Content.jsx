import React from 'react';
import './Content.css';


const images = importAll(require.context('../assets/images/skills', false, /\.(png|jpe?g|svg)$/));

const Content = () => {
   const ceritifications = [
        {
          id: 1,
          name: 'Angular 7 Online Course',
          date: 'May 24, 2019'
        },
        {
          id: 2,
          name: 'ASP.Net MVC 5 Online Course',
          date: 'July 24, 2019'
        }
   ];
    return (
        <div>
           <section id="about">
                <div className="information">
                    <h1>
                        John Paul Inhog
                    </h1>
                    <h2>Pasig City, 1600 - 09177388097</h2>
                </div>
                <div className="details pt-4">
                    <p>Hi, there! I am John Paul. I am full stack developer with 4+ years of experience developing web applications using agreed tools, libraries and coding standard. </p>
                </div>
                <div className="social-links">
                     <div className="social-icon p-2">
                         <a href="https://www.facebook.com/jampolXD/" title="Facebook">
                              <i className="fa fa-facebook-square"></i>
                         </a>
                     </div>
                     <div className="social-icon p-2" title="Instagram">
                         <i className="fa fa-instagram"></i>
                     </div>
                     <div className="social-icon p-2">
                          <a href="https://github.com/poldo332" title="Github">
                              <i className="fa fa-github"></i>
                          </a>
                     </div>
                     <div className="social-icon p-2">
                          <a href="https://stackoverflow.com/users/6850994/poldo" title="Stackoverflow">
                              <i className="fa fa-stack-overflow"></i>
                          </a>
                     </div>
                </div>
           </section>
           <section id="experience">
                <h2 className="mb-5 title">Experiences</h2>
           </section>
           <section id="education">
                <h2 className="mb-5 title">Education</h2>
                
                <div className="content-details mb-4">
                    <div className="content-description">
                         <h1>Pamantasan ng Lungsod ng Pasig</h1>
                         <h2>Bachelor of Science in Information Technology</h2>
                         <p>Alkalde Jose St.  Kapasigan, Pasig City</p>
                    </div>
                    <div className="content-year">
                         2012- 2016
                    </div>
                </div>
                <div className="content-details">
                    <div className="content-description">
                         <h1>Sagad High School</h1>
                         <p>E. Angeles St. Sagad, Pasig City</p>
                    </div>
                    <div className="content-year">
                         2007- 2011
                    </div>
                </div>
           </section>
           <section id="skills">
                <h2 className="mb-5 title">Skills</h2>

                <h2 className="pb-3">PROGRAMMING LANGUAGES & TOOLS</h2>
                <div className="img-container">
                    {
                         images.map((image, index) => {
                              const imagesName = ['Angular', 'CSS', 'Javascript', 'Angular', 'React', 'Bootstrap', 'Sass', 'Node', 'AWS', 'Azure', 'Laravel', 'PHP'];
                              return <div className="img-fluid p-3" title={imagesName[index]} key={imagesName[index]}>
                                   <img src={image.default} alt={imagesName[index]}/>
                              </div>
                         })
                    }
                 </div>
           </section>
           <section id="interests">
                
               <h2 className="mb-5 title">Hobbies & Interests</h2>
               <p>
                    Apart from being a developer, I also enjoy playing computer/mobile games during my free time. Most of the time I am sitting in front of my computer so I always make sure that I have time to be healthy and physically fit.
               </p>
               <p>
                    I can't start my day without taking my coffee. I'm a coffee lover too. I enjoyed travelling, cyling, cooking and most of all I enjoy life.
               </p>
               <div>
                    <ul>
                         <li>
                              <i className="fa fa-code"></i>
                              <h5 className="">Code</h5>
                         </li>
                         <li>
                              <i className="fa fa-gamepad"></i>
                              <h5>Games</h5>
                         </li>
                         <li>
                              <i className="fa fa-music"></i>
                              <h5>Music</h5>
                         </li>
                         <li>
                              <i className="fa fa-coffee"></i>
                              <h5>Coffee</h5>
                         </li>
                         <li>
                              <i className="fa fa-plane"></i>
                              <h5>Travel</h5>
                         </li>
                         <li>
                              <i className="fa fa-bicycle"></i>
                              <h5>Bicycle</h5>
                         </li>
                    </ul>
               </div>
           </section>
           <section id="awards">
               <h2 className="mb-5 title">CERTIFICATIONS</h2>
               <div>
                    {
                         ceritifications.map(ceritification => {
                              return <div className="content-details mb-4" key={ceritification.id}>
                                   <div className="content-description">
                                        <h1>{ ceritification.name }</h1>
                                        <h2>Udemy</h2>
                                   </div>
                                   <div className="content-year">
                                        { ceritification.date }
                                   </div>
                              </div>
                         })
                    }
               </div>
           </section>
        </div>
    )
}
 
function importAll(files) {
     return files.keys().map(files);
}

export default Content;