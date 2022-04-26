import "./App.css";
import { useState } from "react";
import AddForm from './components/AddForm';
import WorkoutsTable from './components/WorkoutsTable';
import { sortByDate } from "./utils";

export default function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    workout.id = workouts.length + 1;
    setWorkouts([...workouts, workout].sort(sortByDate));

    const dateIndex = workouts.findIndex(({ date }) => workout.date === date);
    const existedDate = workouts[dateIndex];
    const newWorkout = {
      ...existedDate,
      distance: parseInt(existedDate.distance) + parseInt(workout.distance)
    };
    const newWorkouts = [...workouts];
    newWorkouts[dateIndex] = newWorkout;

    setWorkouts(newWorkouts);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((i) => i.id !== id));
  };

  return (
    <div className="wrapper">
      <AddForm addWorkout={addWorkout} />
      <WorkoutsTable workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  )
};

