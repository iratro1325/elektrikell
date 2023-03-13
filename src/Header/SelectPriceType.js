import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePrice } from '../services/stateService';

function SelectPriceType() {
 console.log('SelectPriceType');
 const activePrice = useSelector((state) => state.activePrice);
 const dispatch = useDispatch();

  return (
    <ButtonGroup>
      <Button active={activePrice === 'low'} onClick={() => dispatch(setActivePrice('low'))}>Odavad Tunnid</Button>
      <Button active={activePrice === 'high'} onClick={() => dispatch(setActivePrice('high'))}>Tipptunnid</Button>
    </ButtonGroup>
  );
}

export default SelectPriceType;