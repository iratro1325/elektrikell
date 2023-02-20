import { useState } from 'react';
import { useEffect } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, Tooltip, Legend, Line, YAxis } from 'recharts';
import ErrorModal from '../ErrorModal';
import { getPriceData } from '../services/apiService';
import moment from 'moment';

function Body() {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    // console.log('errorMessage', errorMessage);
    useEffect(() => {
        getPriceData()
            .then(({ success, data, messages }) => {
                if (!success) {
                    throw messages[0];
                }
                
                const newData = data.ee.map(d => {

                    return {
                        price: d.price,
                        hour: moment.unix(d.timestamp).hours(),
                    }
                });
                setData(newData);
            })
            .catch((error) => setErrorMessage(error.toString()));
    }, []);

    return (
        <>
            <ResponsiveContainer width="100%" height={400} >
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
        </>
    );
}
export default Body;