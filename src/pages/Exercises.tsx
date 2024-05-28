import { useParams } from "react-router-dom"
import exercises from "../data/exercises.json"
import ExerciseCard from "../components/ExerciseCard";
import NotFound from "./NotFound";
import "../App.css"

export default function Exercises() {

   const {muscle} = useParams();
   if (muscle == null) return;

   const selectedExercises = exercises.filter(exercise => exercise.primaryMuscles.includes(muscle));

   if (selectedExercises.length === 0) return <NotFound text={`No exercises for ${muscle}`} />;

  return (
    <div>
      <h2 className="exercise-heading">Exercises for {muscle}</h2>
      <div className="exercise-card-container">
        {selectedExercises.map(exercise => (
          <ExerciseCard key={exercise.id} id={exercise.id} name={exercise.name} />
        ))}
      </div>
    </div>
  )
}
