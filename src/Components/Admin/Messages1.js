import "./Massade1.css";

export default function Messages1() {
  return (
    <div className="msg-page">
      {/* Header */}
      <div className="msg-header">
        <div>
          <h2>Messages & Announcements</h2>
          <p>Send announcements and manage conversations</p>
        </div>
        <button className="compose-btn">Compose Message</button>
      </div>

      {/* Stats */}
      <div className="msg-stats">
        <div className="msg-card">
          <h3>1</h3>
          <p>Total Messages</p>
        </div>
        <div className="msg-card green">
          <h3>1</h3>
          <p>Sent</p>
        </div>
        <div className="msg-card yellow">
          <h3>0</h3>
          <p>Unread Messages</p>
        </div>
      </div>

      {/* Recent Announcements */}
      <div className="msg-box">
        <h3>Recent Announcements</h3>

        <div className="announcement">
          <div>
            <h4>Platform Maintenance</h4>
            <p>The platform will be down for maintenance...</p>
          </div>
          <span className="status sent">Sent</span>
        </div>
      </div>

      {/* Recent Conversations */}
      <div className="msg-box">
        <h3>Recent Conversations</h3>

        <div className="conversation">
          <div className="avatar">A</div>
          <div>
            <h4>Admin • Dr. James</h4>
            <p>Thanks!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
