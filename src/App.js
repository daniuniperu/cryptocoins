import './App.css';
import Coins from "./pages/coins";
import CoinsProfile from "./pages/coinsprofile";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/coins" element={<Coins />} />
            <Route path="/:id" element={<CoinsProfile /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;