import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Hakkımızda</h4>
              <h2 className="section__title">Aliko Araç Kiralama Servisine Hoşgeldiniz</h2>
              <p className="section__description">
              Merhaba! Biz, Aliko Rent a Car, araç kiralama konusunda uzmanlaşmış bir ekibiz ve müşterilerimize sorunsuz ve keyifli bir araç deneyimi sunmayı amaçlıyoruz. [Şirket Adı]'nde, müşteri memnuniyeti ve güveni en üst önceliğimizdir.

              Firmamız, geniş araç filosuyla her türlü ihtiyaca uygun çözümler sunar. Yenilenen ve bakımlı araçlarımız ile müşterilerimize güvenli ve konforlu bir sürüş deneyimi yaşatmayı hedefliyoruz. Ayrıca, esnek kiralama seçenekleri ve rekabetçi fiyatlarımız ile bütçenize uygun çözümler sunuyoruz.
              </p>

            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
