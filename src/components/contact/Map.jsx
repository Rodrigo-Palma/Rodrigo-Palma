import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="Map of Porto Alegre, Brazil"
            loading="lazy"
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sPorto+Alegre,+RS,+Brazil"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
