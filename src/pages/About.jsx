import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";


const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="Hakkımızda" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Güvenli Ulaşım Sağlamaya Kararlıyız
                </h2>

                <p className="section__description">
                Sizlere güvenilir ve kaliteli bir araç kiralama deneyimi yaşatmak için buradayız. İster iş seyahati, ister tatil olsun, Aliko Rent a Car olarak amacımız, her müşterimizin beklentilerini aşmak ve güler yüzle geri dönmesini sağlamaktır.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Yardım Lazım mı?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
