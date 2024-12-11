import React, { useEffect, useState } from "react";
import Axios from "axios";
import baseUrl from "../../constants";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeesResponse = await Axios.get(`${baseUrl}/api/employees`);
        setEmployees(employeesResponse.data.data);

        const leaveRequestsResponse = await Axios.get(`${baseUrl}/api/leave-requests`);
        setLeaveRequests(leaveRequestsResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const employeeWithLeaveStatus = employees.map((employee) => {
    const employeeLeaveRequests = leaveRequests.filter(
      (request) => request.employeeId === employee.id
    );

    return {
      ...employee,
      leaveRequests: employeeLeaveRequests,
    };
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Employee Leave Status</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employeeWithLeaveStatus.map((employee) => (
          <div
            key={employee.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-medium text-gray-800">
              {employee.name} ({employee.role})
            </h2>
            <p className="text-gray-600 mt-2">Email: {employee.email}</p>
            <h3 className="mt-4 font-semibold text-lg">Leave Requests:</h3>
            <ul className="mt-2">
              {employee.leaveRequests.length > 0 ? (
                employee.leaveRequests.map((request) => (
                  <li
                    key={request.id}
                    className="border-t border-gray-300 pt-2 mt-2 text-gray-800"
                  >
                    <span className="text-sm text-gray-600">
                      {request.type} leave from {request.start_date} to{" "}
                      {request.end_date}
                    </span>
                    <strong
                      className={`ml-2 px-3 py-1 rounded-full text-white text-sm ${
                        request.CurrentStatus === "pending"
                          ? "bg-yellow-400"
                          : request.CurrentStatus === "approved"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {request.CurrentStatus}
                    </strong>
                  </li>
                ))
              ) : (
                <p className="text-gray-500 mt-2">No leave requests.</p>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
