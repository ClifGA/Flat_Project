import React, { useState } from 'react';

const RenderHours = ({ updateCurrentTimesheetUser }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTimesheets = updateCurrentTimesheetUser.timesheets.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTimesheets = currentTimesheets.map((timesheet) => (
    <div
      key={timesheet.id}
      className="flex justify-around border border-gray-300 rounded-md py-1 px-2 w-1/2 mx-auto my-5 p-5"
    >
      <div className="text-3xl text-gray-700 font-bold">
        <p className="mt-4">Start Week: {timesheet.start_date}</p>
        <p className="mt-4">End Week: {timesheet.end_date}</p>
        <p className="mt-4">Hours Worked: {timesheet.hours}</p>
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto my-5 p-5 text-center text-3xl text-gray-700 font-bold">
      {renderTimesheets}

      {/* Render pagination buttons */}
      <div>
        {updateCurrentTimesheetUser.timesheets.length > itemsPerPage &&
          Array.from(
            { length: Math.ceil(updateCurrentTimesheetUser.timesheets.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 ${
                  index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            )
          )}
      </div>
    </div>
  );
};

export default RenderHours;