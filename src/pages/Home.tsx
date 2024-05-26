import targetMuscles from "../data/targetMuscles.json"
import Header from "../components/Header"
import MuscleCard from "../components/MuscleCard"
import "../App.css"

export default function Home() {

  return (
    <div className="app">
      <Header />
      <div className="muscle-card-container">
        {targetMuscles.map(muscle => (
           <MuscleCard key={muscle} muscle={muscle} />
        ))}
      </div>
    </div>
  )
}
