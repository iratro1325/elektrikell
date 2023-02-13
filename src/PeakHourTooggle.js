import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FooterHighPricer from './FooterHighPrice';


function PeakHourToggle() {
    const [activePeak, setActivePeak] = useState(0);
    const buttons = ['Odavad tunnid', 'Tiputunnid'];
    const [show, setShow] = useState(false);
            
  return (
    <ButtonGroup aria-label="PeakHourToggle">
      {buttons.map(peak => (
            <Button 
              key={peak} 
              active={peak === activePeak}
              onClick={() => setActivePeak(peak)}>
              {peak}
              <button onClick={() => setShow(!show)}>Toggle Show</button>
              {show && <FooterHighPricer/>}
            </Button> 
        ))}
    </ButtonGroup>
  );
}

export default PeakHourToggle;

