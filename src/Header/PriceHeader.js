import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';
import { getCurrentPrice } from '../services/apiService';
import ErrorModal from '../ErrorModal';

function PriceHeader(props) {
const [currentPrice, setCurrentPrise] = useState(1);
const [errorMessage, setErrorMessage] = useState(null);

useEffect(() => {
  getCurrentPrice()
  .then(({ success, data, messages}) => {
    if (!success) {
      throw messages[0];
  }
  const kwPrice = +(data[0].price / 10 * 1.2).toFixed(2);
  setCurrentPrise(kwPrice);
  })
  .catch((error) => setErrorMessage(error.toString()));
  }, []);

  return (
    <>
      <Row className='mb-2'>
        <Col>1 of 3</Col>
        <Col>
        <SelectPriceType {...props} />
        </Col>
        <Col>{currentPrice}</Col>
      </Row>
       <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
       </>
      );
}

export default PriceHeader;