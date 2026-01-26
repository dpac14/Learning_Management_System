import "./Course1.css";

export default function Couse1() {
  return (
    <div className="courses-page">
      {/* Header */}
      <div className="page-header">
        <h2>Courses Management</h2>
        <p>Manage all courses and content</p>
      </div>

      {/* Search + Filter */}
      <div className="course-controls">
        <input type="text" placeholder="Search courses..." />
        <select>
          <option>All</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
      </div>

      {/* Table */}
      <div className="course-table">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Trainer</th>
              <th>Price</th>
              <th>Students</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="course-info">
                <img
                  src="https://via.placeholder.com/50"
                  alt="course"
                />
                <div>
                  <strong>React Masterclass</strong>
                  <p>Frontend</p>
                </div>
              </td>
              <td>Dr. James Anderson</td>
              <td>$99.99</td>
              <td>145</td>
              <td>
                <span className="status published">published</span>
              </td>
              <td className="actions">
                <a href="#">View</a>
                <a href="#">Edit</a>
              </td>
            </tr>

            <tr>
              <td className="course-info">
                <img
                  src="https://via.placeholder.com/50"
                  alt="course"
                />
                <div>
                  <strong>JavaScript Advanced</strong>
                  <p>Programming</p>
                </div>
              </td>
              <td>Prof. Maria Garcia</td>
              <td>$79.99</td>
              <td>178</td>
              <td>
                <span className="status published">published</span>
              </td>
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
