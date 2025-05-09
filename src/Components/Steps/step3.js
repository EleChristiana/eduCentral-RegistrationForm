// src/Components/Steps/step3.js
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../Steps/step3.css'
import redpushpin from '../../assets/images/redpushpin.png'


const Step3 = ({ formData, setFormData, onNext, onBack  }) => {
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [fieldName]: file });
  };

  return (
    <Form>
      <Row className="mb-3">
        <p>Please Provide the following information for verification Purpose</p>
        <Col>
          <Form.Control
              className="underline-input"
            type="text"
            placeholder="NIN"
            value={formData.nin}
            onChange={(e) => setFormData({ ...formData, nin: e.target.value })}
          />
        </Col>
        <Col>
          <Form.Control
              className="underline-input"
            type="text"
            placeholder="BVN"
            value={formData.bvn}
            onChange={(e) => setFormData({ ...formData, bvn: e.target.value })}
          />
        </Col>
      </Row>



      <Form.Group className="mb-3">
  <Form.Label>Upload Front of ID (JPG, PNG, PDF — Max size: 5MB)</Form.Label>
  <div className="custom-file-upload">
    <label style={{ color: 'blue'}} htmlFor="idFront">[Choose File]</label>
    <input
      id="idFront"
      type="file"
      accept=".jpg,.png,.pdf"
      onChange={(e) => handleFileChange(e, 'idFront')}
    />
  </div>
 <Form.Text style={{ color: 'black', display: 'flex', alignItems: 'center', gap: '5px' }}>
  <img src={redpushpin} style={{ width: '16px', height: '16px' }} />
  Make sure the uploaded image is clear and all text is readable
</Form.Text>

</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>Upload Back of ID (JPG, PNG, PDF — Max size: 5MB)</Form.Label>
  <div className="custom-file-upload">
    <label style={{ color: 'blue'}} htmlFor="idBack">[Choose File]</label>
    <input
      id="idBack"
      type="file"
      accept=".jpg,.png,.pdf"
      onChange={(e) => handleFileChange(e, 'idBack')}
    />
  </div>
 <Form.Text style={{ color: 'black', display: 'flex', alignItems: 'center', gap: '5px' }}>
  <img src={redpushpin} style={{ width: '16px', height: '16px' }} />
  Make sure the uploaded image is clear and all text is readable
</Form.Text>
</Form.Group>


      <div className="d-flex justify-content-between">
        <Button variant="secondary" onClick={onBack}>Previous</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </Form>
  );
};

export default Step3;
