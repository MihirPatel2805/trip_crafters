import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage  from './pages/HomePage';
import HomeRailwaysPage from './pages/HomeRailwaysPage';
import HomeHotelsPage from './pages/HomeHotelsPage';
import TrainListingPage from './pages/TrainListingPage';
import HotelListingPage from './pages/HotelListingPage';

function App() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/railways" element={<HomeRailwaysPage />} >
          <Route path="train-listing" element={<TrainListingPage />} />
        </Route>
        <Route path="/hotels" element={<HomeHotelsPage />} >
            <Route path="hotel-listing" element={<HotelListingPage />} />
          
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
