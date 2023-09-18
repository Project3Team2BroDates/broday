  import React from 'react';
import github from "../images/github.png";
import linkedin from "../images/LinkedIn_logo_initials.png";
import email from "../images/gmail.png";
import indeed from "../images/indeed.png";
import twitter from "../images/twitter.png";
import picture1 from "../images/peter.png";
import picture2 from "../images/teylor.jpg"
import picture3 from "../images/northLOL.png"
import picture4 from "../images/FamilyNew.jpg"

  const Meet = () => {
    return (
      <>
      <h1 className='meet'>Meet the Team</h1>
      <div className='contactContainer'>
        <div className='memberDiv'>
          <h2>Peter Conenna</h2>
          <img className='aboutPic' src={picture1} alt="pic"></img>
          
            <p className='aboutUs'>Stuff and things</p>
            <div className='contactLinks'>
            <a href="https://github.com/AndrewJMForbes"><img className="contact" src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/andrew-forbes-a94a92265/"><img className="contact" src={linkedin} alt="something" /></a>
            <a href="https://profile.indeed.com/"><img className="contact" src={indeed} alt="something" /></a>
            <a href="https://twitter.com/Sebr0f"><img className="contact" src={twitter} alt="something" /></a>
            <a href="mailto:vudo8585@gmail.com"><img className="contact" src={email} alt="something" /></a>
            </div>
        </div>
        <div className='memberDiv'>
          <h2>Teylor Smith</h2>
          <img className='aboutPic' src={picture2} alt="pic"></img>

            <p>Stuff and things</p>
            <div className='contactLinks'>
            <a href="https://github.com/AndrewJMForbes"><img className="contact" src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/andrew-forbes-a94a92265/"><img className="contact" src={linkedin} alt="something" /></a>
            <a href="https://profile.indeed.com/"><img className="contact" src={indeed} alt="something" /></a>
            <a href="https://twitter.com/Sebr0f"><img className="contact" src={twitter} alt="something" /></a>
            <a href="mailto:vudo8585@gmail.com"><img className="contact" src={email} alt="something" /></a>
            </div>
        </div>
        <div className='memberDiv'>
          <h2>North Goddard</h2>
          <img className='aboutPic' src={picture3} alt="pic"></img>

            <p>Stuff and things</p>
            
            <div className='contactLinks'>
            <a href="https://github.com/AndrewJMForbes"><img className="contact" src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/andrew-forbes-a94a92265/"><img className="contact" src={linkedin} alt="something" /></a>
            <a href="https://profile.indeed.com/"><img className="contact" src={indeed} alt="something" /></a>
            <a href="https://twitter.com/Sebr0f"><img className="contact" src={twitter} alt="something" /></a>
            <a href="mailto:vudo8585@gmail.com"><img className="contact" src={email} alt="something" /></a>
            </div>
        </div>
        <div className='memberDiv'>
          <h2>Andrew Forbes</h2>
          <img className='aboutPic' src={picture4} alt="pic"></img>


            <p>Stuff and things</p>
            <div className='contactLinks'>
            <a href="https://github.com/AndrewJMForbes"><img className="contact" src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/andrew-forbes-a94a92265/"><img className="contact" src={linkedin} alt="something" /></a>
            <a href="https://profile.indeed.com/"><img className="contact" src={indeed} alt="something" /></a>
            <a href="https://twitter.com/Sebr0f"><img className="contact" src={twitter} alt="something" /></a>
            <a href="mailto:vudo8585@gmail.com"><img className="contact" src={email} alt="something" /></a>
            </div>
        </div>
      </div>
      </>
    );
  };

  export default Meet;