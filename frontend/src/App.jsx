import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from "./Components/Registration.jsx";
import Position from "./Components/Position.jsx"
import Login from "./Components/Login.jsx"
import './App.css'
import Register from "./Components/Registration.jsx"
function App() {

  return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route index element={<Login/>} />
            <Route path="/Position" element={<Position/>}/>
              <Route path="/Register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App
