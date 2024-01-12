import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Hakkında",
  },

  {
    path: "#",
    display: "Gizlilik Politikası",
  },

  {
    path: "/cars",
    display: "Araç Listesi",
  },
  {
    path: "/contact",
    display: "İletişim",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Hizmeti
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Tüm Türkiye'ye hizmet sağlayan oluşumumuz müşterilerimizin güvenli bir şekilde yolculuk yapmasını amaçlar.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Kolay Linkler</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Adres</h5>
              <p className="office__info">Harbiye, Çankaya, Ankara</p>
              <p className="office__info">Phone: +90 123 456 7890</p>

              <p className="office__info">Email: alikaratas@gmail.com</p>

              <p className="office__info">Mesai Saatleri: 10.00 - 19.00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Ali Karataş. Tüm hakları saklıdır.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
