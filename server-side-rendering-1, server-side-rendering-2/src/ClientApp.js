import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from '../../code-splitting/src/App';

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)