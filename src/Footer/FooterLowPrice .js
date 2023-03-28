import Container from 'react-bootstrap/Container';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';
import Durations from './Durations';

function FooterLowPrice() {
    const lowPriceTimestamp = useSelector((state) => state.lowPriceTimestamp);

    return (
        <Container className="text-center">
            <div>Tahan tarbida</div>
            <div>
                <Durations />
            </div>
            <div>Parim aeg</div>
            <div>
                {lowPriceTimestamp && <Countdown date={lowPriceTimestamp * 1000} />}
            </div>
        </Container>
    );
}

export default FooterLowPrice;