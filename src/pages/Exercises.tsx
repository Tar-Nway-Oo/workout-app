import { useParams } from "react-router-dom"
import exercises from "../data/exercises.json"
import ExerciseCard from "../components/ExerciseCard";
import "../App.css"

export default function Exercises() {

   const {muscle} = useParams();
   if (muscle == null) return;

   const selectedExercises = exercises.filter(exercise => exercise.primaryMuscles.includes(muscle));

  return (
    <div className="exercise-card-container">
      {selectedExercises.map(exercise => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  )
}
