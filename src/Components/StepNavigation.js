


import React from 'react';
import { Nav } from 'react-bootstrap';
import '../Components/Steps/stepNavigation.css'; 

const StepNavigation = ({ currentStep }) => {
  const steps = ['Personal Info', 'Address', 'Verification', 'Terms & Conditions'];

  return (
    <Nav variant="tabs" activeKey={currentStep}>
      {steps.map((label, index) => (
        <Nav.Item key={index}>
          <Nav.Link eventKey={index} className="step-link">
            <span className="step-number">Step {index + 1}</span><br />
            <span className="step-label">{label}</span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default StepNavigation;

