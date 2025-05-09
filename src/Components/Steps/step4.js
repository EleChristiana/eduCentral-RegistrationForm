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
            <div className="" style={{ maxWidth: '600px', width: '100%' }}>
                <h4 className="fw-bold text-center">Terms and Conditions</h4>
                <p> <strong>Please read the following terms carefully before submitting your information.</strong></p>

                <ol>
                    <li><strong>Accuracy of Information<br />
                        You confirm that all information provided is true and complete.</strong>
                    </li>
                    <li><strong>Use of Information<br />
                        Your data will be used only for the purposes stated and in accordance with our Privacy Policy.</strong>
                    </li>
                    <li><strong>Consent<br />
                        By submitting, you agree to storing and processing your information.</strong>
                    </li>
                </ol>
                <Form.Check
                    type="checkbox"
                    checked={accepted}
                    onChange={() => setAccepted(!accepted)}
                    label={
                        <>
                          < strong> Please accept</strong> <span style={{ color: 'blue' }}>terms and conditions</span>?
                        </>
                    }
                />

                <div className="d-flex justify-content-between mt-4">
                    <Button variant="secondary" onClick={onBack}>Previous</Button>
                    <Button style={{ background: 'rgba(100,225,0,255)' }}
                        variant="success"
                        onClick={handleFinish}
                        disabled={!accepted}
                    >
                        Finish
                    </Button>
                </div>
            </div>


            <ToastContainer position="top-center" className="mt-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg="primary">
                    <Toast.Body className="text-white">Form completed successfully!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default Step4;
