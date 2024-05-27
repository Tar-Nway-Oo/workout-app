import { Link } from "react-router-dom"
import dumbBellImg from "../assets/dumb-bell.jpg"
import "../App.css"

type ExerciseCardProps = {
   id: string
   name: string
}

export default function ExerciseCard({id, name}: ExerciseCardProps) {
    
  return (
    <Link to={id} className="exercise-card">
      <img src={dumbBellImg} alt="dumb-bell" />
      <p className="exercise-name">{name}</p>
    </Link>
  )
}
