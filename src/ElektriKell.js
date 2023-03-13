import { useEffect } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterHighPrice from './Footer/FooterHighPrice';
import Body from './Body/Body';

// import ErrorModal from './ErrorModal';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import FooterLowPrice from './Footer/FooterLowPrice ';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePrice } from './services/stateService';

function ElektriKell() {
  console.log('ElektriKell');

  const params = useParams();
  const activePrice = useSelector((state) => state.activePrice);
  const dispatch = useDispatch();

   useEffect(() => {
    params.activePrice && dispatch(setActivePrice(params.activePrice));
  }, [params, dispatch]);

  return (
    <>
      <div className="container-wrapper pb-2">
        <Container className="text-center">
          <NavBar />
          <PriceHeader />
          <Body />
        </Container>
      </div>
      {activePrice === 'low' ?
        <FooterLowPrice />
        : <FooterHighPrice />}
      <Loading />
    </>
  );
}

export default ElektriKell;
