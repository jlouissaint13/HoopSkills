import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from "./Components/Registration.jsx";
import Position from "./Components/Position.jsx"
import './App.css'

function App() {

  return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route index element={<Registration/>} />
            <Route path="/Position" element={<Position/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App
