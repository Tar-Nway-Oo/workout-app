import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Exercises from "./pages/Exercises"

export default function App() {
  return (
    <Routes>
       <Route path="/">
         <Route index element={<Home />} />
         <Route path=":muscle" element={<Exercises />} />
       </Route>
    </Routes>
  )
}
