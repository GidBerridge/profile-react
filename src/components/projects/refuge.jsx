import refuge from '../img/refuge_screenshot.jpg'

const Refuge = () => {
  return (
    <div class="card-project">
      <img src={refuge} alt="refuge hq screenshot" />
      <div class="card-project-infos">
        <div>
          <h2 className="card-project-infos title">www.officialrefuge.com</h2>
          <h2 className="card-project-infos">HTML / CSS</h2>
          <p>A responsive static site built in HTML / CSS.</p>
        </div>
      </div>
    </div>
    )
}


export default Refuge;


