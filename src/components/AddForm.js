import React from "react";
import { useState } from "react";
import { isValidDate } from "../utils";

export default function AddForm({ addWorkout }) {
  const initialFormState = { id: null, date: "", distance: "" };
  const [workout, setWorkout] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!workout.date || !workout.distance) {
      return alert("Заполните все поля!");
    }
    return isValidDate(workout.date) === false
      ? alert("Введите дату в правильном формате! Пример: 12.12.2012")
      : setWorkout(initialFormState), addWorkout(workout)
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
