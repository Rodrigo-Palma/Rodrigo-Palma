import React, { useState } from "react";
import Modal from "react-modal";
//import Contact from "../contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <a href="https://www.linkedin.com/pulse/escala-velocidade-e-eleg%2525C3%2525A2ncia-magia-do-apache-spark-rodrigo-palma-wsigf%3FtrackingId=ExGZnHGaSEOy%252B3Gk2OQq%252Fg%253D%253D/?trackingId=ExGZnHGaSEOy%2B3Gk2OQq%2Fg%3D%3D" target="_blank" rel="noreferrer">
                <img src={`img/blog/blog-4.jpg`} alt="blog post"></img>
              </a>
            </div>
            <div className="blog-info">
              <div>
                <div className="meta">28/OUT/2023 - BY RODRIGO PALMA</div>
                <h6>
                  <a href="https://www.linkedin.com/pulse/escala-velocidade-e-eleg%2525C3%2525A2ncia-magia-do-apache-spark-rodrigo-palma-wsigf%3?trackingId=ExGZnHGaSEOy%252B3Gk2OQq%252Fg%253D%253D/?trackingId=ExGZnHGaSEOy%2B3Gk2OQq%2Fg%3D%3D" rel="noreferrer">
                    Escala, Velocidade e Elegância: A Magia do Apache Spark✨💻🧙‍♂️
                  </a>
                </h6>
              </div>
            </div>  

          </div>
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <a href="https://www.linkedin.com/pulse/desbravando-o-mundo-dos-big-data-acelere-sua-jornada-com-palma-5pj2f%3FtrackingId=8ywxlHWBTuaEIwLhshH%252BAA%253D%253D/?trackingId=8ywxlHWBTuaEIwLhshH%2BAA%3D%3D" target="_blank" rel="noreferrer">
                <img src={`img/blog/blog-2.jpg`} alt="blog post"></img>
              </a>  
            </div>
            <div className="blog-info">
              <div className="meta">19/OUT/2023 - BY RODRIGO PALMA</div>
              <h6>
                <a href="https://www.linkedin.com/pulse/desbravando-o-mundo-dos-big-data-acelere-sua-jornada-com-palma-5pj2f%3FtrackingId=8ywxlHWBTuaEIwLhshH%252BAA%253D%253D/?trackingId=8ywxlHWBTuaEIwLhshH%2BAA%3D%3D" target="_blank" rel="noreferrer">
                Desbravando o Mundo do Big Data: Acelere sua Jornada com Koalas, a Alternativa Inteligente ao PySpark                
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="800"
        >
          <div className="blog-grid" onClick={toggleModalFour}>
            <div className="blog-img">
              <a href="https://www.linkedin.com/pulse/tratamento-eficiente-de-missing-values-usando-mice-um-rodrigo-palma-zi5mf%3FtrackingId=m2Lo4qCLQ0inhImPxKQoug%253D%253D/?trackingId=m2Lo4qCLQ0inhImPxKQoug%3D%3D" target="_blank" rel="noreferrer">
                <img src={`img/blog/blog-1.jpg`} alt="blog post"></img>
              </a>
            </div>

            <div className="blog-info">
              <div className="meta">17/OUT/2023 - BY RODRIGO PALMA</div>
              <h6>
                <a href="https://www.linkedin.com/pulse/tratamento-eficiente-de-missing-values-usando-mice-um-rodrigo-palma-zi5mf%3FtrackingId=m2Lo4qCLQ0inhImPxKQoug%253D%253D/?trackingId=m2Lo4qCLQ0inhImPxKQoug%3D%3D" target="_blank" rel="noreferrer">
                Tratamento Eficiente de Missing Values usando MICE: Um Guia Prático                
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-4 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <img src={`img/blog/blog-3.jpg`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">28/OUT/2023 - RODRIGO PALMA</div>
              <h6>
                <a href="https://www.linkedin.com/in/rodrigospalma/" target="_blank" rel="noreferrer">
                  Em breve, aguarde...
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}

        
      </div>
      {/* End .row */}

    </>
  );
};

export default News;
