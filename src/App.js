import { Routes, Route } from 'react-router-dom';
import About from './About';
import ElektriKell from './ElektriKell';

// Komponenty - obychnye javascript funczii, kot vozvrawaut react element.
// Nazvanie komponenta dolgno na4inatsya s zaglavnoy bukvy. Dlya togo, 4toby razli4at elementy v jsx.

// JSX - novyj sintaks koda ot React js, kotoryj pozvolayet pisat html i javascript udobno vmeste.
// Komponennty dolgny vozvrawat tolko 1 element, napisannyj blagodarya JSX.
function App() {
    
    // Kagdyj component route otve4aet za kakuyu-nibud ssylku.
    // V route my peredaem property "path", kot opredelyaet ssylku, 
    // po kot on inicializiruet component.
    // V element 'property' my peredaem tot samyj element.

    // Takge my mogem peredat dannye s ssylki v component.
    // ':' v path ozna4aut, 4to my vozmem vse, 4to napisano posle '/' 
    // i peredadim v peremennuju, nazvanie kot my opredelili posle':'.
    // Eto nazyvaujt 'parametry ssylki'.
    // V nawem slu4ae http://localhost:3000/low/4 budet ozna4at, 4to my hotim videt 
    // component 'Elektrikel' s parametrom durationParam = 4.
    return (
        <Routes>
            <Route path="/" element={<ElektriKell />} />
            <Route path="/:activePrice" element={<ElektriKell />} />
            <Route path="/low/:durationParam" element={<ElektriKell />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;