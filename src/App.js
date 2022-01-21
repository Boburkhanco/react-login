
import './App.css';
import { Routes, Route} from "react-router-dom"

//Components
import Header from "./Components/Header/Header"
import About from './Pages/About';
import Login from './Pages/Login';
import Chat from './Pages/Chat';
import Main from "./Pages/Main";

//Routes
import Public from './Routes/Public';
import Private from './Routes/Private';



function App() {

  

  
  return (
    <>
      <Header />

      <Routes>

        <Route element={<Public />}>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Route>

      <Route element={<Private />}>
        <Route path="/chat" element={<Chat/>} />
        <Route path="/main" element={<Main />} /> 
      </Route>

      <Route path="*" element={<h1>Page not found 404 :</h1>}/>

      </Routes>

    </>
  );
}

export default App;
