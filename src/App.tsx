import { Route, Routes } from 'react-router';

import './App.scss';

import { Forecast } from './pages/Forecast';
import { Home } from './pages/Home';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/"element={<Home />} />
                <Route path="/forecast" element={<Forecast />}></Route>
            </Routes>
        </div>
    );
}

export default App;
