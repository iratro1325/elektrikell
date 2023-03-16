import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import NavBar from './Header/NavBar';
import PricesHeader from './Header/PricesHeader';
import FooterHighPrice from './Footer/FooterHighPrice';
import Body from './Body/Body';
import FooterLowPrice from './Footer/FooterLowPrice ';
import ErrorModal from './ErrorModal';
import Loading from './Loading';
import './App.scss';

function ElektriKell() {
  const params = useParams();

  const [activePrice, setActivePrice] = useState("low");

  useEffect(() => {
    params.activePrice && setActivePrice(params.activePrice);
  }, [params]);

  return (
    <>
      <div className="container-wrapper pb-2">
        <Container className="text-center">
          <NavBar />
          <PricesHeader activePrice={activePrice} setActivePrice={setActivePrice} />
          <Body activePrice={activePrice} />
        </Container>
      </div>
      {activePrice === "low" ?
        <FooterLowPrice />
        : <FooterHighPrice />}
      <Loading />
      <ErrorModal />
    </>
  );
}

export default ElektriKell;