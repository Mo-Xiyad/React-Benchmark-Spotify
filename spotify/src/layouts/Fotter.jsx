const Footer = () => {
  return (
    <div className="player container-fluid fixed-bottom position-sticky bg-container pt-1">
      <div className="row flex-nowrap justify-content-between playBar py-3">
        <div className="col-auto">
          <div className="playerArtistInfo d-flex">
            <div className="d-flex flex-column pl-2"></div>
          </div>
        </div>
        <div className="col-6">
          <div className="playerControls w-50 d-flex justify-content-between">
            <div>
              <img src="./assets/img/playerbuttons/Shuffle.png" alt="shuffle" />
            </div>
            <div>
              <img
                src="./assets/img/playerbuttons/Previous.png"
                alt="previous"
              />
            </div>
            <div>
              <img src="./assets/img/playerbuttons/Play.png" alt="play" />
            </div>
            <div>
              <img src="./assets/img/playerbuttons/Next.png" alt="next" />
            </div>
            <div>
              <img src="./assets/img/playerbuttons/Repeat.png" alt="repeat" />
            </div>
          </div>
          <div className="progressContainer d-flex align-items-center">
            <span className="currentTime">00:00</span>
            <div className="progress w-100">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <audio />
              </div>
            </div>
            <span className="duration">00:00</span>
          </div>
        </div>
        <div className="col-auto mr-3">
          <div className="playerVolume">
            <i className="fa fa-volume-up" />
            <input type="range" defaultValue={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
