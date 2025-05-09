import React, { useState } from 'react';
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap';

const Step4 = ({ onBack }) => {
  const [accepted, setAccepted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFinish = () => {
    if (accepted) {
      setShowToast(true);
    } else {
      alert('Please accept the terms and conditions to proceed.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column p-4">
      <div className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
        <h4 className="fw-bold text-center">Terms and Conditions</h4>
        <p>Please read the following terms carefully before submitting your information.</p>

        <ol>
          <li><strong>Accuracy of Information</strong><br />
            You confirm that all information provided is true and complete.
          </li>
          <li><strong>Use of Information</strong><br />
            Your data will be used only for the purposes stated and in accordance with our Privacy Policy.
          </li>
          <li><strong>Consent</strong><br />
            By submitting, you agree to storing and processing your information.
          </li>
        </ol>

        <Form.Check 
          type="checkbox"
          label="Please accept term and conditions?"
          checked={accepted}
          onChange={() => setAccepted(!accepted)}
        />

        <div className="d-flex justify-content-between mt-4">
          <Button variant="secondary" onClick={onBack}>Previous</Button>
          <Button 
            variant="success" 
            onClick={handleFinish}
            disabled={!accepted}
          >
            Finish!
          </Button>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-center" className="mt-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg="success">
          <Toast.Body className="text-white">🎉 Form completed successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Step4;
