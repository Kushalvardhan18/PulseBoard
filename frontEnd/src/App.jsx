import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import SignIn from "./pages/SignIn";
import Register from "./pages/Register.jsx"
function App() {
  return (
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App