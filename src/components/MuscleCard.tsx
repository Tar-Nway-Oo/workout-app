import { Link } from "react-router-dom"
import dumbBellImg from "../assets/dumb-bell.jpg"
import "../App.css";

type MuscleCardProps = {
   muscle: string
}

export default function MusclesCard({muscle}: MuscleCardProps) {
  return (
    <Link to={muscle} className="muscle-card">
      <img src={dumbBellImg} alt="dumb-bell" />
      <p>{muscle}</p>
    </Link>
  )
}
