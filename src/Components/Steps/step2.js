// src/Components/Steps/step2.js
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import  '../Steps/step1.css'

const Step2 = ({ formData, setFormData, onNext, onBack  }) => {
  return (
    <Form>
      <Row className="mb-3">
        <Row className="mb-3">
          <Form.Control
           className="underline-input"
            type="text"
            placeholder="Street 1"
            value={formData.street1}
            onChange={(e) => setFormData({ ...formData, street1: e.target.value })}
          />
        </Row>
        <Row>
          <Form.Control
           className="underline-input"
            type="text"
            placeholder="Street 2"
            value={formData.street2}
            onChange={(e) => setFormData({ ...formData, street2: e.target.value })}
          />
        </Row>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="City"
               className="underline-input"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
               className="underline-input"
            placeholder="State"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Select   className="underline-input"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          >
            <option>Select your country</option>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Kenya</option>
               
          </Form.Select>
        </Col>
        <Col>
          <Form.Control
           className="underline-input"
            type="text"
            placeholder="Zip code"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </Col>
      </Row>
     

      <div className=" btnn d-flex justify-content-between mb-3">
        <Button variant="secondary" onClick={onBack}>Previous</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </Form>
  );
};

export default Step2;
