import { useEffect, useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterHighPrice from './Footer/FooterHighPrice';
import Body from './Body/Body';
import ErrorModal from './ErrorModal';

// import ErrorModal from './ErrorModal';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import FooterLowPrice from './Footer/FooterLowPrice ';

function ElektriKell() {
  console.log('ElektriKell');

  const params = useParams();
  const [activePrice, setActivePrice] = useState('low');
  
   useEffect(() => {
    params.activePrice && setActivePrice(params.activePrice);
  }, [params]);

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
      <ErrorModal />
    </>
  );
}

export default ElektriKell;
