import { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBarComponent from './NavBar';
import PriceHeader from './PriceHeader';
import FooterComponent from './Footer';
import FooterHighPrice from './FooterHighPrice';

function App() {
   const [activePrice, setActivePrice] = useState('low');
   return (
      <>
         <div className='container-wrapper pb-2'>
            <Container>
               <NavBarComponent />
               <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice} />
               <div className='chart'></div>
            </Container>
         </div>
         {activePrice === 'low' ? <FooterComponent /> : <FooterHighPrice />}
              </>
   );
}

export default App;
