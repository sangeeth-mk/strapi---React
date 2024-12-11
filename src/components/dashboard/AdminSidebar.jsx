import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, CalendarDays } from "lucide-react";

const AdminSidebar = () => {
  return (
    <div className="bg-[#ffff] text-indigo-600 h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-teal-500 h-12 flex items-center justify-center">
        <h3 className="text-2xl text-center">Employee MS</h3>
      </div>

      <div className="px-4">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `flex items-center space-x-4 py-2.5 px-4 rounded ${
              isActive ? "bg-teal-500" : ""
            }`
          }
          end
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/employees"
          className={({ isActive }) =>
          `flex items-center space-x-4 py-2.5 px-4 rounded ${
            isActive ? "bg-teal-500" : ""
          }`
        }         >
          <Users />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/leaves"
          className={({ isActive }) =>
          `flex items-center space-x-4 py-2.5 px-4 rounded ${
            isActive ? "bg-teal-500" : ""
          }`
        }        >
          <CalendarDays />
          <span>Leaves</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
