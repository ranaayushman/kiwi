import React from "react";
import Asidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import AddStaff from "../Pages/AddStaff";
import MemberList from "../Pages/MemberList";
import StaffList from "../Pages/StaffList";
import Batch from "../Pages/Batch";
import Navbar from "../components/Navbar";
import Attendance from "../Pages/Attendance";
import Payments from "../Pages/Payments";
import Plans from "../Pages/Plans";
import Expenses from "../Pages/Expenses";
import Reports from "../Pages/Reports";
import Sms from "../Pages/Sms";

const Page = () => {
  return (
    <Router>
      <div className="flex gap-x-0">
        <div className="w-fit">
          <Asidebar />
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <div className="shadow-b-lg text-5xl">
            <Navbar />
          </div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<RightBar />} />
            <Route path="/add-staff" element={<AddStaff />} />
            <Route path="/member-list" element={<MemberList />} />
            <Route path="/staff-list" element={<StaffList />} />
            <Route path="/batch" element={<Batch />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/sms" element={<Sms />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Page;
