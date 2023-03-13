import { useState, useEffect } from 'react';
import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ReferenceLine,
} from 'recharts';
import { getPriceData } from '../services/apiService';
import moment from 'moment';
import AreaLow from './AreaLow';
import AreaHigh from './AreaHigh';
import Button from 'react-bootstrap/Button';
import DateForm from './DateForm';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setShowForm } from '../services/stateService';

const pastHours = 10;
const start = moment().subtract(pastHours, 'hours').format();
const end = moment().add(30, 'hours').format();

function Body() {
    console.log('Body');
    
    const [data, setData] = useState(null);
    const activePrice = useSelector((state) => state.activePrice);
    const [searchDate, setSearchDate] = useState({
        start, end, pastHours
    });

    const dispatch = useDispatch();

    useEffect(() => {

        getPriceData(searchDate)
            .then(({ success, data, messages }) => {

                if (!success) {
                    throw messages[0];
                }

                const newData = data.ee.map(d => {
                    return {
                        ...d,
                        price: +(d.price / 10 * 1.2).toFixed(2),
                        hour: moment.unix(d.timestamp).hours(),
                        current: moment().isSame(moment.unix(d.timestamp), 'hour'),
                    }
                });

                setData(newData);
            })
            .catch((error) => dispatch(setErrorMessage(error.toString())));
            }, [searchDate, dispatch]);

    const chartsChildren = (
        <>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <ReferenceLine x={data?.findIndex((el) => el.current)} stroke="red" />
        </>
    );

    return (
        <>

            {activePrice === 'high' ?
                <AreaHigh data={data}>
                    {chartsChildren}
                </AreaHigh>
                :
                <AreaLow {...{ data, searchDate }} >
                    {chartsChildren}
                </AreaLow>
            }
            <Button variant="outline-secondary" onClick={() => dispatch(setShowForm(true))} size="sm">
                Määra kuupäevad
            </Button>
            <DateForm setSearchDate={setSearchDate} />
            </>
    );
}

export default Body;