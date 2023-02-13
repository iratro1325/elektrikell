import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PeakHourToggle from './PeakHourTooggle';


function PriceHeader() {
  return (
      <Row className='mb-2'>
        <Col>1 of 3</Col>
        <Col><PeakHourToggle /></Col>
        <Col>3 of 3</Col>
      </Row>
      );
}

export default PriceHeader;