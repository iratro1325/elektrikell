import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/stateService';

// ReactDom - это вспомогательный пакет реакта для работы с ДОМ (Document object Model).
// ReactDom - most mejdu reactom i brauzerskim DOM.
// Tut beretsya element s HTML v <div id=root> i obora4ivaetsya Reactom.
// Vse nashe prilogenie zatem otrisovyvaetsya (render) v etom div-elemente.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Dlya togo, 4toby ispolzovat redux sostoyanie v reacte, my ispolzuem dopolnitelnuju biblioteku 'react-redux'.
// S react-redux berem component provaider i peredaem emu ves redux.
// On dolgen obernut ves proect i byt zaglavnym componentom.

// Dlya imitirovanija multipage application v react ispolzuetsya react-router-dom.
// Poskolku react - eto single page application, 4tob rabotali ssylki, 
// i ne perezapuskalos vse nawe prilogenie, nujno obernut vse nawe prilogenie v BrowseRouter component ot react-router-dom.
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
