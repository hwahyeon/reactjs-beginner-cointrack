import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coin from "./components/Coin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Coin />} />
            </Routes>
        </Router>
    );
}

export default App;
