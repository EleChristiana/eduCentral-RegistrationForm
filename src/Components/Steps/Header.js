import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import eduCentralIcon from '../../assets/images/eduCentralIcon.jpg'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaBars
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className=" py-2">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
        
          <Col xs="auto">
            <img src={eduCentralIcon} alt="Logo" style={{ width: '150%', height: '30px' }} />
          </Col>

      
          <Col xs="auto">
            <div className="d-flex align-items-center gap-3">
              <FaFacebookF size={16} />
              <FaInstagram size={16} />
              <FaTwitter size={16} />
              <FaLinkedinIn size={16} />

              <div
                className="bg-dark d-flex justify-content-center align-items-center rounded-circle"
                style={{ width: '32px', height: '32px' }}
              >
                <FaBars color="white" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
