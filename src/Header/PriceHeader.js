import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectPriceType from './SelectPriceType';
import ErrorModal from '../ErrorModal';
import { getCurrentPrice } from '../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setCurrentPrice } from '../services/stateService';

function PriceHeader(props) {
console.log('PriceHeader');

    //const [currentPrice, setCurrentPrice] = useState(0);
    //const errorMessage = useSelector((state) => state.errorMessage);
    const currentPrice = useSelector((state) => state.currentPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentPrice()
            .then(({ success, data, messages }) => {
                if (!success) {
                    throw messages[0];
                }

                const kwPrice = +(data[0].price / 10 * 1.2).toFixed(2);
                dispatch(setCurrentPrice(kwPrice));
            })
            .catch((error) => dispatch(setErrorMessage(error.toString())));
    }, [ dispatch ]);

    return (
        <>
            <Row className="mb-2">
                <Col>1 of 3</Col>
                <Col>
                    <SelectPriceType />
                </Col>
                <Col>{currentPrice}</Col>
            </Row>
            <ErrorModal />
        </>
    );
}

export default PriceHeader;