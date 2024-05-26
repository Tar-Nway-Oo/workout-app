import "../App.css"

type Exercise = {
   name: string
   force: string
   level: string
   mechanic: string | null
   equipment: string | null
   primaryMuscles: string[]
   secondaryMuscles: string[]
   instructions: string[]
   category: string
   images: string[]
   id: string
}

type ExerciseCardProps = {
   exercise: Exercise
}

export default function ExerciseCard({exercise}: ExerciseCardProps) {
  
  const {name, level, equipment, primaryMuscles, instructions} = exercise;
  
  return (
    <div className="exercise-card">
      <p className="exercise-name">{name}</p>
      <ul>
         {primaryMuscles.map(muscle => (
            <li key={muscle}>{muscle}</li>
         ))}
      </ul>
      <p>Level: {level}</p>
      <p>Equipment: {equipment ? equipment : "none"}</p>
      <ol className="instructions">
         {instructions.map(instruction => (
            <li key={instruction}>{instruction}</li>
         ))}
      </ol>
    </div>
  )
}
