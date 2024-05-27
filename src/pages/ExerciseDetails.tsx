import { useParams } from "react-router-dom"
import exercises from "../data/exercises.json"
import "../App.css"

export default function ExerciseDetails() {

  const {id} = useParams();
  if (id == null) return;

  const selectedExercise = exercises.find(exercise => exercise.id === id);
  if (selectedExercise == null) return;

  const {name, category, level, equipment, primaryMuscles, secondaryMuscles, instructions} = selectedExercise;

  return (
    <div className="exercise-detail">
      <p className="name">{name}</p>
      <p><span className="bold-text">Category:</span> {category}</p>
      <p><span className="bold-text">Level:</span> {level}</p>
      <p><span className="bold-text">Equipment:</span> {equipment}</p>
      <div>
      <p><span className="bold-text">Primary Muscles:</span> </p>
        <ul>
           {primaryMuscles.map(muscle => (
             <li key={muscle}>{muscle}</li>
           ))}
        </ul>
      </div>
      {
        secondaryMuscles.length > 0 &&
        <div>
           <p><span className="bold-text">Secondary Muscles:</span> </p>
           <ul>
              {secondaryMuscles.map(muscle => (
                <li key={muscle}>{muscle}</li>
              ))}
           </ul> 
        </div>
      }
      <div>
        <p className="bold-text">Instructions: </p>
        <ol className="instructions">
           {instructions.map(instruction => (
             <li key={instruction}>{instruction}</li>
           ))}
        </ol>
      </div>
    </div>
  )
}
