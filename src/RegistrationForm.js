



import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RegistrationCard from './Components/RegistrationCard';
import StepNavigation from './Components/StepNavigation';
import Step1 from './Components/Steps/step1';
import Step2 from './Components/Steps/step2';
import Step3 from './Components/Steps/step3';
import Step4 from './Components/Steps/step4';
import Header from './Components/Steps/Header'

const RegistrationForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    age: '',
    gender: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    country: '',
    zip: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1 onNext={nextStep} formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2 onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step3 onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step4 onBack={prevStep} formData={formData} />;
      default:
        return null;
    }
  };

  return (
      <>
    
    <Container fluid className="bg-light min-vh-100 py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={9}>
          <Header />
          <Row className="align-items-start">
            {/* Registration card */}
            <Col md={4}>
              <div style={{ height: '350px' }}>
                <RegistrationCard />
              </div>
            </Col>

            {/* Steps */}
            <Col md={8}>
              <div
                className="shadow-lg p-4 rounded bg-white"
                style={{ minHeight: '500px', display: 'flex', flexDirection: 'column' }}
              >
                <StepNavigation currentStep={step} />
                <div className="mt-4 flex-grow-1">{renderStep()}</div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
   </>
  );
};

export default RegistrationForm;
