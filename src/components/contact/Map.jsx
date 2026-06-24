import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6906.555434943183!2d-51.219095329965306!3d-30.057572971844326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519785e1c097019%3A0x51a6cf3540ab1586!2sTv.%20Alexandrino%20Alencar%2C%20140%20-%20Azenha%2C%20Porto%20Alegre%20-%20RS%2C%2090160-030!5e0!3m2!1spt-BR!2sbr!4v1694730414989!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
