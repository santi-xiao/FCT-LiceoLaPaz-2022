import React from "react";

const Home = () => {
  return (
    <>
      <div className="homecontainer">
        <h1>Welcome to Store By Daylight</h1>
        <p className="subtitle">
          Store by Daylight is a store for playable characters from the video
          game Dead By Daylight
        </p>
        <div className="textconatiner">
          <p>
            <span className="boldfont">
              Dead by Daylight is a survival horror asymmetric multiplayer
              online game&nbsp;
            </span>
            developed by Behaviour Interactive. It is a one-versus-four game in
            which{" "}
            <span className="boldfont">
              one player takes on the role of a savage killer and the other four
              play as survivors
            </span>
            ; the killer must{" "}
            <span className="boldfont">
              catch each survivor and sacrifice them
            </span>{" "}
            to a malevolent force known as the Entity by impaling them on hooks,
            while the survivors must{" "}
            <span className="boldfont">
              avoid being caught and fix five generators
            </span>{" "}
            to open the exit gates.
          </p>
        </div>
      </div>
      <div className="videocontainer">
        <iframe
          title="homevideo"
          width="600"
          height="400"
          frameBorder="0"
          src="https://www.youtube.com/embed/JGhIXLO3ul8?autoplay=1&mute=1&loop=1"
          className="homecontainer"
        ></iframe>
      </div>
      <div className="homecontainer title">
        <h2>Find a way out as a survivor... or hunt as a killer</h2>
        <img
          src={require("../images/trapperbanner.webp")}
          alt="banner"
          className="banner"
        />
      </div>
      <div className="homecontainer">
        <h2 className="title">
          Different styles of play. Choose the one that best suits yours
        </h2>
        <p style={{ textAlign: "center" }}>
          From map controllers, silent, invisible... to fast and deadly
        </p>
      </div>
    </>
  );
};

export default Home;
