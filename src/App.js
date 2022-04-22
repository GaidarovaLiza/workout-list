import "./App.css";
import { useState } from "react";

import AddWorkouts from './components/AddWorkouts';
import WorkoutsForm from './components/WorkoutsForm';

function App() {
  const workoutData = [];
  const [workouts, setWorkouts] = useState(workoutData);

  const addWorkout = (workout) => {
    workout.id = workouts.length + 1;
    setWorkouts([...workouts, workout]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((i) => i.id !== id));
  };

  return (
    <div className="wrapper">
      <AddWorkouts addWorkout={addWorkout} />
      <WorkoutsForm workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;
