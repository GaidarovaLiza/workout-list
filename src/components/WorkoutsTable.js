import React from "react";

export default function WorkoutsTable({ deleteWorkout, workouts }) {
  return (
    <div className="workout-list">
      {workouts.length > 0 || !Array.isArray(workouts)
        ? workouts.map((item) => (
          <div className="workout-list-row" key={item.id}>
            <span>{item.date}</span>
            <span>{item.distance}</span>
            <div>
              <p className="button-delete"
                onClick={() => deleteWorkout(item.id)} >
                ✘
              </p>
            </div>

          </div>
        ))
        : <div>
          <p className="no-workout">No workouts...</p>
        </div>
      }

    </div>
  );
}




