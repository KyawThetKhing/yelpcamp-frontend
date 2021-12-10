import React from "react";

import map from "assets/images/Map.png";
import "./Map.scss";

const Map = () => {
  return (
    <div className="map">
      <img className="map__image" src={map} alt="google-map" />
    </div>
  );
};

export default Map;
