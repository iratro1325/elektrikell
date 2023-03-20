import { Routes, Route } from 'react-router-dom';
import About from './About';
import ElektriKell from './ElektriKell';

function App() {
    return (
        <Routes>
            <Route path="/elektrikell" element={<ElektriKell />} />
            <Route path="/elektrikell/:activePrice" element={<ElektriKell />} />
            <Route path="/elektrikell/low/:durationParam" element={<ElektriKell />} />
            <Route path="/elektrikell/about" element={<About />} />
        </Routes>
    );
}

export default App;