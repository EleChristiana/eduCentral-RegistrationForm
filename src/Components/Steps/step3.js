// src/Components/Steps/step3.js
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Step3 = ({ formData, setFormData, onNext, onBack  }) => {
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [fieldName]: file });
  };

  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="NIN"
            value={formData.nin}
            onChange={(e) => setFormData({ ...formData, nin: e.target.value })}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="BVN"
            value={formData.bvn}
            onChange={(e) => setFormData({ ...formData, bvn: e.target.value })}
          />
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Upload Front of ID (JPG, PNG, PDF — Max size: 5MB)</Form.Label>
        <Form.Control type="file" accept=".jpg,.png,.pdf" onChange={(e) => handleFileChange(e, 'idFront')} />
        <Form.Text className="text-danger">Make sure the uploaded image is clear and all text is readable</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Upload Back of ID (JPG, PNG, PDF — Max size: 5MB)</Form.Label>
        <Form.Control type="file" accept=".jpg,.png,.pdf" onChange={(e) => handleFileChange(e, 'idBack')} />
        <Form.Text className="text-danger">Make sure the uploaded image is clear and all text is readable</Form.Text>
      </Form.Group>

      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={onBack}>Previous</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </Form>
  );
};

export default Step3;
