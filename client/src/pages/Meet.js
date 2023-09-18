  import React from 'react';
import github from "../images/github.png";
import linkedin from "../images/LinkedIn_logo_initials.png";
import email from "../images/gmail.png";
import indeed from "../images/indeed.png";
import twitter from "../images/twitter.png";
import picture1 from "../images/peter.png";
import picture2 from "../images/teylor.jpg"
import picture3 from "../images/North.png"
import picture4 from "../images/FamilyNew.jpg"

  const Meet = () => {
    return (
      <>
      <h1 className='meet'>Meet the Team</h1>
      <div className='contactContainer'>
        <div className='memberDiv'>
          <h2>Peter Conenna</h2>
          <img className='aboutPic' src={picture1} alt="pic"></img>
          
            <p className='aboutUs'>I am a passionate web developer with a strong interest in all things related to tech. In my free time I enjoy playing video games, working out, and exploring music and playing guitar.</p>
            
        </div>
        <div className='memberDiv'>
          <h2>Teylor Smith</h2>
          <img className='aboutPic' src={picture2} alt="pic"></img>

            <p className='aboutInfo'>Meet Teylor, a dynamic addition to our web development team. After a decade in the blue-collar industry, Teylor's career pivot brings a burst of creativity to our projects. With a fresh perspective and a passion for web development, Teylor is driving innovation and making a significant impact on our digital endeavors.</p>
            
        </div>
        <div className='memberDiv'>
          <h2>North Goddard</h2>
          <img className='aboutPic' src={picture3} alt="pic"></img>

            <p className='aboutInfo'>Hello, I'm North Goddard, a passionate web developer with a creative mindset and a knack for turning ideas into engaging online experiences. Welcome to my digital playground, where I craft the virtual landscapes of the future.</p>
            
            
        </div>
        <div className='memberDiv'>
          <h2>Andrew Forbes</h2>
          <img className='aboutPic' src={picture4} alt="pic"></img>


          <p className='aboutInfo'>I'm a carpenter by trade and a father of 2 who likes video games and anime. I like being outside and spending time with my family. I'm hoping to use the experience from this course to change careers in order to spend more time with my family.</p>
            
        </div>
      </div>
      </>
    );
  };

  export default Meet;