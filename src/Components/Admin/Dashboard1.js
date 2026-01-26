import {Link } from "react-router-dom"
import ReactPeginate from "react-paginate"
import "./Dashboard1.css";


export default function Dashboard1() {
  return (
    <div className="dashboard">
      {/* Page Title */}
      <div className="page-title">
        <h2>Dashboard</h2>
        <p>Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <StatCard title="Total Students" value="612" change="+8.2%" />
        <StatCard title="Total Trainers" value="24" change="+3.1%" />
        <StatCard title="Total Courses" value="48" change="+12.5%" />
        <StatCard title="Active Enrollments" value="1,847" change="+15.3%" />
        <StatCard title="Sessions Today" value="3" />
        <StatCard title="Total Revenue" value="$287K" change="+22.4%" />
      </div>

      {/* Middle Section */}
      <div className="dashboard-row">
        {/* Student Growth */}
        <div className="card large">
          <h3>Student Growth</h3>
          <div className="chart-placeholder">📈 Line Chart Here</div>
        </div>

        {/* Course Completion */}
        <div className="card">
          <h3>Course Completion Rate</h3>

          <Progress title="React" percent={68} />
          <Progress title="JavaScript" percent={81} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="dashboard-row">
        {/* Active Users */}
        <div className="card">
          <h3>Active Users</h3>

          <div className="active-box blue">
            <p>Daily Active</p>
            <h2>342</h2>
          </div>

          <div className="active-box green">
            <p>Weekly Active</p>
            <h2>498</h2>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3>Quick Actions</h3>

          <div className="actions">
            <Action label="Add Course" />
            <Action label="Add Trainer" />
            <Action label="Create Session" />
            <Action label="Upload Certificate" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */

function StatCard({ title, value, change }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h3>{value}</h3>
      {change && <span>{change} vs last month</span>}
    </div>
  );
}

function Progress({ title, percent }) {
  return (
    <div className="progress-item">
      <div className="progress-header">
        <span>{title}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress-bar">
        <div style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

function Action({ label }) {
  return (
    <div className="action-card">
      <div className="icon">🎯</div>
      <p>{label}</p>
    </div>
  );
}
