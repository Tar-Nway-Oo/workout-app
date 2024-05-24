import workoutImg from "../assets/workout.jpg"
import "../App.css"

export default function Header() {
  return (
    <header className="header">
      <div className="left-side">
        <h1 className="title">Workout App</h1>
        <p className="sub-title">Sweat, Smile and Repeat</p>
        <p>Check out the most effective exercises.</p>
        <button className="explore-btn">Explore Exercises</button>
      </div>
      <img className="header-img" src={workoutImg} alt="a man lifting dumbells" />
    </header>
  )
}
