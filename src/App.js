
import Home from "./components/Home/home";
import { HashRouter, Routes, Route, } from "react-router-dom";

            
function App()
{  
            return (
              <HashRouter>
              <Routes>
              <Route exact path ='/' element={<Home/>}/>
              </Routes>
              </HashRouter>

  );
}


export default App;

