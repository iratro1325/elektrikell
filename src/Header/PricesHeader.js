import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import SelectPriceType from './SelectPriceType';
import { getCurrentPrice } from '../services/apiService';
import { setErrorMessage } from '../services/stateService';

//Komponenty mogut prinimat property
// Priperty peredaetsya komponentu kak svoystvo html elementu
// properies mogut byt lubym tipom dannyh
// kagdoe property, peredannoe componentu, sobiraetsya v odin object
// component prinimaet tolko odin argument i kak pravilo ego nazyvaut 'props'
function PricesHeader(props) {
    const [currentPrice, setCurrentPrice] = useState(0);

    const dispatch = useDispatch();

// useEffect - raecthook, kot zapuskaetsya tolko posle togo, kak ves component zakon4il otrisovku.
// useEffect prinimaet v sebya 2 argumenta:
// 1 - funczija, kot zapustitsya, kogda component zakon4it svoyu otrisovku,
// 2 - spisok zavisimostej, massiv.
// Spisok zavisimostej kontroliruet zapusk funczii pervogo argumenta.
// esli v zavisimosi izmenilis dannye, to useEffect zanovo zapuskaetsya.
// component moget zanovo otrisovatsya, no useEffect ne zapustitsya, esli eto izmenenie ego ne kasaetsya.
// esli peredat pustoj massiv v zavisimosti, to useEffect inizializiruetsya tolko 1 raz posle pervoj otrisovki componenta.
// useEffect takge garantiruet, 4to esli v nem my budem menyat sostoyanie componenta, to proizoidet tolko odna otrisovka componenta.
// Pocle etoj otrisovki useEffect bolwe ne zapustitsya.
// v useEffecte mojno postavit return i vernut functziju, kot zapustitsya, pri vyhode iz componenta.
// pervaja otrisovka componenta - mount (est unmount), potom render.

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
            <Row className="mb-2">
                <Col>1 of 3</Col>
                <Col>
                    <SelectPriceType {...props} />
                </Col>
                <Col>{currentPrice}</Col>
            </Row>
        </>
    );
}

export default PricesHeader;