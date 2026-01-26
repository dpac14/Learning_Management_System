import "./Report1.css";

export default function Report1() {
  return (
    <div className="reports-page">
      {/* Header */}
      <div className="reports-header">
        <div>
          <h2>Reports & Analytics</h2>
          <p>View detailed reports and analytics</p>
        </div>

        <div className="report-actions">
          <select>
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
          <button className="export-btn">Export PDF</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="report-stats">
        <div className="report-card">
          <p>Avg Course Completion</p>
          <h3>73.4%</h3>
          <span>↑ 2.3% from last month</span>
        </div>

        <div className="report-card green">
          <p>Avg Student Score</p>
          <h3>84%</h3>
          <span>↑ 1.5% from last month</span>
        </div>

        <div className="report-card purple">
          <p>Avg Session Attendance</p>
          <h3>82%</h3>
          <span>↑ 1.8% from last month</span>
        </div>

        <div className="report-card yellow">
          <p>Total Downloads</p>
          <h3>1,284</h3>
          <span>↑ 12.4% from last month</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="report-tabs">
        <span className="active">Student Progress</span>
        <span>Trainer Performance</span>
      </div>

      {/* Table */}
      <div className="report-table">
        <table>
          <thead>
            <tr>
              <th>Trainer</th>
              <th>Courses</th>
              <th>Students</th>
              <th>Avg Rating</th>
              <th>Completion Rate</th>
              <th>Sessions</th>
              <th>Avg Attendance</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Dr. James Anderson</td>
              <td>2</td>
              <td>348</td>
              <td>⭐ 4.8</td>
              <td>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "73%" }}></div>
                </div>
                73%
              </td>
              <td>24</td>
              <td>
                <span className="badge success">82%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Export Reports */}
      <div className="export-section">
        <h3>Export Reports</h3>

        <div className="export-cards">
          <div className="export-card">
            <p>📊</p>
            <h4>Student Progress</h4>
            <span>CSV / PDF</span>
          </div>

          <div className="export-card">
            <p>📈</p>
            <h4>Course Analytics</h4>
            <span>CSV / PDF</span>
          </div>

          <div className="export-card">
            <p>👥</p>
            <h4>Trainer Report</h4>
            <span>CSV / PDF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
