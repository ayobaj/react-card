import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Players from "./components/Players"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path= "/players" element={<Players/>}/>
      </Routes>
    </div>
  )
}

export default App
