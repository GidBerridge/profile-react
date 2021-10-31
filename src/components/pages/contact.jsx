import React from 'react';

function ContactToggle() {
  const [show, setShow] = React.useState(false);
  return(
      <div className="nav-text" >
        {
          show ? <Contact/> : null
        }
        <a className="nav-text" onClick={() => setShow(!show)}>Contact</a>
      </div>
  );
}


const Contact = () => {
  return (
    <div className="card-project">
      <div className="card-project-infos">
        <div>
          <h2 className="card-project-infos title">Contact</h2>
          <h3>Email</h3>
          <p>gid.berridge@gmail.com</p>
          <h3><a href="https://github.com/GidBerridge">GitHub</a></h3>
          <h3><a href="www.linkedin.com/in/gideon-berridge">LinkedIn</a></h3>
          </div>
      </div>
    </div>
  );
}


export default ContactToggle;

