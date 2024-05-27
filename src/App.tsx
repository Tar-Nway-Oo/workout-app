import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Exercises from "./pages/Exercises"
import ExerciseDetails from "./pages/ExerciseDetails"

export default function App() {
  return (
    <Routes>
       <Route path="/">
         <Route index element={<Home />} />
         <Route path=":muscle" element={<Exercises />} />
         <Route path=":muscle/:id" element={<ExerciseDetails />} />
       </Route>
    </Routes>
  )
}
