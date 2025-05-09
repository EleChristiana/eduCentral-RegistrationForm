import React from 'react';
import { Card } from 'react-bootstrap';
import eduCentralBookremovebg from '../assets/images/eduCentralBookremovebg.png'; 

const RegistrationCard = () => (
  <Card style={{ backgroundColor: 'rgb(15, 86, 179)', color: 'white', paddingBottom: '3.5rem' }} className="h-100">
      <img
        src={eduCentralBookremovebg}
        alt="Registration"
        style={{  width: '40%', height: '200px', objectFit: 'contain' }}
      />
   
    <Card.Body style={{ paddingBottom: '3.5rem', textAlign: 'start' }}>
  
      <Card.Title>Registration</Card.Title>
      <Card.Text>
        Totam argumentum et usu, dicit viderer erroribus eam te lorem iso jjjwq sjeooammvcc dicit viderer erroribus eam argumentum et usu, dicit...
      </Card.Text>
    </Card.Body>
  </Card>
);

export default RegistrationCard;





