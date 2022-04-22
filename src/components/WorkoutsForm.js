import React from "react";

export default function WorkoutsForm(props) {
  return (
    <table className="workout-list">
      <tbody>
        {props.workouts.length > 0
          ? props.workouts.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.distance}</td>
              <td>
                <button
                  className="button delete"
                  onClick={() => props.deleteWorkout(item.id)}
                >
                  X
                </button>
              </td>
            </tr>
          )).sort((a, b) => a.date > b.date ? 1 : -1)
          : <tr>
            <td className="no-workout">No workouts</td>
          </tr>
        }
      </tbody>
    </table>
  );
}




