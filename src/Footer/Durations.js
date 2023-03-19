import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setDurationRange } from '../services/stateService';

function Durations() {
    const { durationParam } = useParams();
    const navigate = useNavigate();

    // useSelector - hook, kot sluwaet redux-oblako i esli izmenitsya sostoyanie,
    // to useSelector inicializiruetsya otrisovku componenta
    // i nazna4aet vse novye dannye v peremennuyu.
    // useSelector ptinimaet funkziju kak argument i eta funkzija opredelyaet, kakoe sostoyanie sluwat.

    const durationRange = useSelector((state) => state.durationRange);
    
    // Dlja inicializirovanija izmenenija sostoyanija ispolzuetsja dispatch.
    // Dispatch - tot, kto otpravit Action v oblako store/redux sostojanie.
    // Dispatch peredast naw action v redux-reducer, tot zapustit funkziju, kot izmenit sostoyanie, 4to potom podhvatit useSelector.
    const dispatch = useDispatch();

    const durations = [1, 2, 3, 4, 6, 8];

    const handleClick = (duration) => {
        if (durationParam) {
            navigate(`/`);
            // navigate(`/low/${time}`);
        }
        // v dispatch peredaem action, a v action peredaem novye dannye o sostoyanii.
        // v reducer peredastsya object s { type: setHourRange, payload: duration }.
        dispatch(setDurationRange(duration));
    };

    // 'Events'
    // Sobytija - eto 4to-to, 4to proizowlo v brauzere.
    // Naprimer, polzovatel nagal 4to-to u nas na proecte, to brauzer shvatil eto sobytie i peredal nawemu proektu.
    // Esli u nas stoit v etom meste trigger sobytija, to etot trigger zapuskaet obrabot4ik sobytija.
    // Triggery nazyvautsya s klu4evogo slova 'on'.
    // Obrabot4iki nazyvautsya s klu4evogo slova 'handle'.
    // Brauzer peredaet v obrabot4ik object 'event', v kot soderjitsya vsya informazija ob etom sobytii.

    return (
        <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
            <ButtonGroup aria-label="First group">
                {durations.map(duration => {
                    const selectedDuration = durationParam ? +durationParam : durationRange;
                    return (
                        <Button
                            key={duration}
                            active={duration === selectedDuration}
                            onClick={() => handleClick(duration)}>
                            {duration}h
                        </Button>
                    )
                }
                )}
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default Durations;