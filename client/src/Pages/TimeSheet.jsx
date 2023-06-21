import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Timesheet = () => {
  const { user } = useAuth0();


  const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([
    { project: "Work Hours", hours: [0, 0, 0, 0, 0, 0, 0], total: 0 },
  ]);

  const handlePreviousWeek = () => {
    setStartDate((currDate) => dateOffset(currDate, -7));
  };

  const handleNextWeek = () => {
    setStartDate((currDate) => dateOffset(currDate, 7));
  };

  const handleAddRow = () => {
    setData([
      ...data,
      {
        project: `Project ${data.length + 1}`,
        hours: [0, 0, 0, 0, 0, 0, 0],
        total: 0,
      },
    ]);
  };

  const handleDeleteRow = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleSaveHours = () => {
    console.log("Hours saved:", data);
  };

  const dateOffset = (date, offset) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + offset);
    return newDate;
  };

  const handleHoursChange = (projectIndex, dayIndex, value) => {
    const updatedData = [...data];
    updatedData[projectIndex].hours[dayIndex] = value;
    updatedData[projectIndex].total = updatedData[projectIndex].hours.reduce(
      (acc, cur) => acc + cur,
      0
    );
    setData(updatedData);
  };

  
  if (user === undefined) {
    return (
      <div>
        <h1 className="text-center text-3xl mt-10 text-gray-700">
          Must be Logged in to view page.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-3xl mt-20 mb-10 font-bold">Time Sheet</h1>
      <div>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handlePreviousWeek}
        >
          Previous Week
        </button>
        {/* <span>{startDate.toLocaleDateString("de-DE")}</span> */}
        <span className="text-center text-3xl mt-20 mb-10 font-bold">{`${startDate.toLocaleDateString(
          "de-DE"
        )} - ${dateOffset(startDate, 6).toLocaleDateString("de-DE")}`}</span>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNextWeek}
        >
          Next Week
        </button>
      </div>
      <table className="table-auto w-full mt-10">
        <thead className="bg-gray-200">
          <tr className="text-left">
            <th>Project</th>
            {days.map((day) => (
              <th key={day}>
                {day}
                <br />
                {new Date(
                  startDate.getFullYear(),
                  startDate.getMonth(),
                  startDate.getDate() + days.indexOf(day)
                ).toLocaleDateString("de-DE")}
              </th>
            ))}
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.project}</td>
              {item.hours.map((hour, dayIndex) => (
                <td key={dayIndex}>
                  <input
                    type="number"
                    value={hour}
                    onChange={(e) =>
                      handleHoursChange(index, dayIndex, e.target.value)
                    }
                  />
                </td>
              ))}
              <td>{item.total}</td>
              <td>
                <button onClick={() => handleDeleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}></td>
            ))}
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleAddRow}
      >
        Add Row
      </button>
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleSaveHours}
      >
        Save Hours
      </button>
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => console.log("Hours submitted:", data)}
      >
        Submit
      </button>
    </div>
  );
};

export default Timesheet;
