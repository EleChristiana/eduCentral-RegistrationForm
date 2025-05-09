import React from 'react';
import { Form, Button } from 'react-bootstrap';
import  '../Steps/step1.css'

const Step1 = ({ onNext, formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <Form>
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
  <div  className="d-flex gap-3">
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
    <Button onClick={onNext}>Next</Button>
  </div>
</Form>

  );
};

export default Step1;
