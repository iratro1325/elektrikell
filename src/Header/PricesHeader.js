import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import SelectPriceType from './SelectPriceType';
import { getCurrentPrice } from '../services/apiService';
import { setErrorMessage } from '../services/stateService';

function PricesHeader(props) {
    const [currentPrice, setCurrentPrice] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentPrice()
            .then(({ success, data, messages }) => {
                if (!success) {
                    throw messages[0];
                }

                const kwPrice = +(data[0].price / 10 * 1.2).toFixed(2);
                setCurrentPrice(kwPrice);
            })
            .catch((error) => dispatch(setErrorMessage(error.toString())));
    }, [dispatch]);

    return (
        <>
            <Row className='mb-5'>
                <Col className='text-start'>
                    <span className='fs-5 ms-2'>Elektri hind hetkel on</span> <br />
                    <span className='fs-5 ms-2 p-1 rounded-2 span_grey'>madal</span>
                </Col>
                <Col className='text-center'>
                    <br />
                    <SelectPriceType {...props} />
                </Col>
                <Col className='text-end'>
                    <h3 className='fs-1'>{currentPrice}</h3>
                    <p>senti / kilovatt-tund</p>
                </Col>
            </Row>
        </>
    );
}

export default PricesHeader;