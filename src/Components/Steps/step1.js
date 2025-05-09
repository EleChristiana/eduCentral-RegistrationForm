


import React, { useState } from 'react';

import { Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import '../Steps/step1.css';

const Step1 = ({ onNext, formData, setFormData }) => {
  const [showToast, setShowToast] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, telephone, age, gender } = formData;

    if (!firstName || !lastName || !email || !telephone || !age || !gender) {
       setShowToast(true);
      return;
    }

    onNext();
  };

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <div className="d-flex gap-3">
        <Form.Group className="mb-3 flex-fill">
          <Form.Label>First name</Form.Label>
          <Form.Control
            className="underline-input"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 flex-fill">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            className="underline-input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Form.Group>
      </div>

      <div className="d-flex gap-3">
        <Form.Group className="mb-3 flex-fill">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            className="underline-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 flex-fill">
          <Form.Label>Your Telephone</Form.Label>
          <Form.Control
            className="underline-input"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
        </Form.Group>
      </div>

      <div className="d-flex gap-3">
        <Form.Group className="mb-3 flex-fill">
          <Form.Label>Age</Form.Label>
          <Form.Control
            className="underline-input"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="checkbox mb-3 flex-fill">
          <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
        </Form.Group>
      </div>

      <div className="d-flex justify-content-end">
        <Button type="submit">Next</Button>
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

export default Step1;

