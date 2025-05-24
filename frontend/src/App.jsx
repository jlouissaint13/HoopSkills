import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from "./Pages/Registration.jsx";
import Position from "./Pages/Position.jsx"
import Login from "./Pages/Login.jsx"
import './App.css'
import Archetype from "./Pages/Archetype.jsx";
import Register from "./Pages/Registration.jsx"
import VideoFeed  from "./Pages/VideoFeed.jsx";
function App() {

  return (
      <div className="App">

        <BrowserRouter>
          <Routes>
              <Route index element={<VideoFeed/>} />
            <Route path="/Position" element={<Position/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Archetype" element={<Archetype/>}/>
               <Route path="/Login" element={<Login/>}/>
              <Route path={"/VideoFeed"} element={<VideoFeed/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App
