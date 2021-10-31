import spanner from '../img/spanner_screenshot.jpg'

const Spanner = () => {
  return (
    <div className="card-project">
      <img src={spanner} alt="spanner hq screenshot" />
      <div className="card-project-infos">
        <div>
          <h2 className="card-project-infos title">www.spannerhq.com</h2>
          <h2 className="card-project-infos">Wordpress</h2>
          <p>A Wordpress site using Elementor theme builder.</p>
          <p>The site is a central site for the many music acts associated with Dan Spanner</p>
          <p>and contains links to all the associated social media.</p>
        </div>
      </div>
    </div>
  );
}


export default Spanner;



