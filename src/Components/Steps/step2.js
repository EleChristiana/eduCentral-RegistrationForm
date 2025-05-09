


import React, { useState } from 'react';
import { Form, Button, Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import '../Steps/step1.css';

const Step2 = ({ formData, setFormData, onNext, onBack }) => {
  const [showToast, setShowToast] = useState(false);

  const handleNext = () => {
    const requiredFields = ['street1', 'street2', 'city', 'state', 'country', 'zip'];
    const isValid = requiredFields.every(field => formData[field]?.trim() !== '');

    if (!isValid) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    onNext();
  };

  return (
    <>
      {showToast && (
        <div className="custom-toast">Please fill out all fields before proceeding.</div>
      )}

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
            <Form.Select
              className="underline-input"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            >
              <option value="">Select your country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
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

        <div className="btnn d-flex justify-content-between mb-3">
          <Button variant="secondary" onClick={onBack}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </Form>

         <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast bg="danger" onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Validation Error</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Please fill in all required fields.
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </>
  );
};

export default Step2;
