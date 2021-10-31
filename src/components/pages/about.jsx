import React from 'react';

function AboutToggle() {
  const [show, setShow] = React.useState(false);
  return(
      <div className="nav-text" >
        {
          show ? <About /> : null
        }
        <a className="nav-text" onClick={() => setShow(!show)}>About</a>
      </div>
  );
}


const About = () => {
  return (
    <div className="card-project">
      <div className="card-project-infos">
        <div>
          <h2 className="card-project-infos title">Gideon Berridge</h2>
          <h2 className="card-project-infos">Full Stack Developer</h2>
          <p>Hi, I recently graduated from a web developer course at Le Wagon bootcamp.</p>
          <p>I particularly love coding in Ruby on Rails, JavaScript, SCSS and React (this is my first React site!).</p>
          <p>I also love playing various musical instruments and pub quizzes.</p>
          <p>Here are some examples of sites I've worked on. Please feel free to contact me for more information.</p>
        </div>
      </div>
    </div>
  );
}


export default AboutToggle;
