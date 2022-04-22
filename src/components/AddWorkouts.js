import React from "react";
import { useState } from "react";

export default function AddWorkouts(props) {
  const initialFormState = { id: null, date: "", distance: "" };
  const [workout, setWorkout] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!workout.date || !workout.distance) return;
    props.addWorkout(workout);
    setWorkout(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="title">
        <span className="title-date">Дата (ДД.ММ.ГГ.)</span>
        <span className="title-distance">Количество км</span>
      </div>
      <input
        type="text"
        name="date"
        value={workout.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="distance"
        value={workout.distance}
        onChange={handleInputChange}
      />
      <button className="add-workout">OK</button>
    </form>
  );
}
