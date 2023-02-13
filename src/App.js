import './App.scss';
import Container from 'react-bootstrap/Container';
import NavBarComponent from './NavBar';
import PriceHeader from './PriceHeader';
import FooterComponent from './Footer';

function App() {
   return (
      <>
         <div className='container-wrapper pb-2'>
            <Container>
               <NavBarComponent />
               <PriceHeader />
               <div className='chart'></div>
            </Container>
         </div>
         <FooterComponent />
      </>
   );
}

export default App;
