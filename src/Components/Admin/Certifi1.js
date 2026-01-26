import "./Certifi1.css";

export default function Certifi1() {
  return (
    <div className="cert-page">
      {/* Header */}
      <div className="cert-header">
        <div>
          <h2>Certificate Management</h2>
          <p>Manage certificates, templates, and verification</p>
        </div>
        <button className="issue-btn">Issue Certificate</button>
      </div>

      {/* Stats */}
      <div className="cert-stats">
        <div className="stat-card green">
          <h3>2</h3>
          <p>Issued</p>
        </div>
        <div className="stat-card yellow">
          <h3>0</h3>
          <p>Pending</p>
        </div>
        <div className="stat-card red">
          <h3>0</h3>
          <p>Revoked</p>
        </div>
      </div>

      {/* Issued Certificates */}
      <h3 className="section-title">Issued Certificates (2)</h3>

      <div className="cert-table">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Certificate ID</th>
              <th>Issue Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Sarah Johnson</td>
              <td>React Masterclass</td>
              <td><span className="badge">CERT-2024-001</span></td>
              <td>2024-11-15</td>
              <td><span className="status issued">Issued</span></td>
              <td>
                <span className="action view">View</span>
                <span className="action revoke">Revoke</span>
              </td>
            </tr>

            <tr>
              <td>Michael Chen</td>
              <td>JavaScript Advanced</td>
              <td><span className="badge">CERT-2024-002</span></td>
              <td>2024-11-20</td>
              <td><span className="status issued">Issued</span></td>
              <td>
                <span className="action view">View</span>
                <span className="action revoke">Revoke</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
