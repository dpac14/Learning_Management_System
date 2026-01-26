export default function ContentDow1() {
  return (
    <div className="page">
      <h2>Content & Downloads</h2>

      <div className="stats">
        <div className="card blue">Video<br />245GB</div>
        <div className="card green">Documents<br />78GB</div>
        <div className="card yellow">Other<br />19GB</div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Content</th>
            <th>Type</th>
            <th>Module</th>
            <th>Downloads</th>
            <th>Enabled</th>
            <th>Expiry</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Introduction</td>
            <td>Video</td>
            <td>React</td>
            <td>142</td>
            <td>Yes</td>
            <td>Unlimited</td>
            <td className="actions">Settings | Delete</td>
          </tr>
          <tr>
            <td>Guide</td>
            <td>Document</td>
            <td>React</td>
            <td>178</td>
            <td>Yes</td>
            <td>Unlimited</td>
            <td className="actions">Settings | Delete</td>
          </tr>
        </tbody>
      </table>

      <div className="settings">
        <h3>Download Settings</h3>
        <label>
          <input type="checkbox" defaultChecked /> Allow students to download
        </label>
        <br />
        <input type="number" value="30" /> days expiry
        <br />
        <button>Save Settings</button>
      </div>
    </div>
  );
}
