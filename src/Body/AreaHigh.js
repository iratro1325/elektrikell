import { useState, useEffect } from 'react';
import { ReferenceArea, ResponsiveContainer, LineChart } from 'recharts';
import { rangePricesGenerator } from '../helpers/rangePrices';

function AreaHigh({ data, children }) {
    
    // useState - reactHook, kot pozvolayet rabotat s sostoyaniem componenta.
    // sostoyanie - peremennaya, kot. dergit v sebe luboj tip dannyh, kot kasaetsya tolko etogo componenta.
    // useState prinimaet kak argument izna4alnoe sostoyanie,
    // t.e. pri pervoj otrisovke componenta nazna4itsya peremennaya c etim izna4alnym zna4eniem.
    // useState pri inicializacii vozvrawaet massiv iz 2 elementov:
    // [0] = iznachalnoe sostoyanie,
    // [1] = funkziya, kot menyaet zna4enie sostoyaniya. V na4alo nazvanija oby4no stavim 'set'.
    // Pri inicializacii izmeneniya sostoyaniya zapuskaetsya novaya otrisovka komponenta.
    // Vse hooki reacta nazyvautsya so slova 'use' i vse oni vozdejstvuyut na otrisovku komponentov. 
    const [xHigh, setXHigh] = useState(null);

    const currentindex = data?.findIndex((el) => el.current);

    useEffect(() => {
        if (data) {
            const rangePrices = rangePricesGenerator(data);
            rangePrices.reverse();

            const half = rangePrices.slice(0, rangePrices.length / 2);

            let sum = 0;
            half.forEach(v => {
                sum += v.sum;
            });
            let average = sum / half.length;
            setXHigh(half.filter(v => v.sum >= average));
        }
    }, [data]);

    return (
        <ResponsiveContainer width="100%" height={400} >
            <LineChart data={data}>
                {children}
                {xHigh?.length ? xHigh.map(x =>
                    <ReferenceArea
                        key={x.i}
                        x1={x.i + currentindex}
                        x2={x.i + currentindex + 1}
                        stroke="red"
                        fill="red"
                        strokeOpacity={0.3}
                        fillOpacity={0.3}
                    />
                ) : null}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AreaHigh;