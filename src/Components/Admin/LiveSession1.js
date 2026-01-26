import "./LiveSession1.css";

export default function LiveSession1() {
  return (
    <div className="live-session">
      {/* Header */}
      <div className="page-header">
        <h2>Live Sessions Management</h2>
        <p>Schedule and manage live training sessions</p>
      </div>

      {/* Stats */}
      <div className="session-stats">
        <Stat title="Total Sessions" value="2" />
        <Stat title="Live Now" value="0" />
        <Stat title="Scheduled" value="2" />
        <Stat title="Completed" value="0" />
      </div>

      {/* Filter */}
      <div className="session-filter">
        <select>
          <option>All Sessions</option>
          <option>Scheduled</option>
          <option>Completed</option>
        </select>
        <button>Export Calendar</button>
      </div>

      {/* Table */}
      <div className="session-table">
        <table>
          <thead>
            <tr>
              <th>Session Title</th>
              <th>Trainer</th>
              <th>Date & Time</th>
              <th>Duration</th>
              <th>Platform</th>
              <th>Attendees</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <strong>React Hooks Deep Dive</strong>
                <br />
                <span>React Masterclass</span>
              </td>
              <td>Dr. James Anderson</td>
              <td>
                2024-12-18
                <br />
                <small>10:00 AM</small>
              </td>
              <td>2 hours</td>
              <td>Zoom</td>
              <td>45 / 100</td>
              <td><span className="status scheduled">Scheduled</span></td>
              <td className="actions">
                <a href="#">View</a>
                <a href="#">Edit</a>
              </td>
            </tr>

            <tr>
              <td>
                <strong>JavaScript ES6+</strong>
                <br />
                <span>JavaScript Advanced</span>
              </td>
              <td>Prof. Maria Garcia</td>
              <td>
                2024-12-20
                <br />
                <small>3:00 PM</small>
              </td>
              <td>1.5 hours</td>
              <td>Zoom</td>
              <td>56 / 80</td>
              <td><span className="status scheduled">Scheduled</span></td>
              <td className="actions">
                <a href="#">View</a>
                <a href="#">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Small Components */
function Stat({ title, value }) {
  return (
    <div className="stat-box">
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
}
