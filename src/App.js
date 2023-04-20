import './App.css';
import { Routes, Route} from "react-router-dom";
import Coins from "./routes/coins";
import Navbar from './Navbar';
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Coins />} />
      </Routes>
      </div>
    </>
  );
}
export default App;