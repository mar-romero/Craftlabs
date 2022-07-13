
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Careers from './pages/Careers'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;