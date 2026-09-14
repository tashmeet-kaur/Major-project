import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./SharedFiles.css";

function SharedFiles() {
  const sharedFiles = [
    {
      name: "project-report.pdf",
      sharedWith: "Tashneet",
      permission: "View",
      date: "15 Sep 2026",
      status: "Active",
    },
    {
      name: "presentation.pptx",
      sharedWith: "Manager",
      permission: "Edit",
      date: "14 Sep 2026",
      status: "Active",
    },
    {
      name: "database.xlsx",
      sharedWith: "Team Members",
      permission: "View",
      date: "12 Sep 2026",
      status: "Active",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <div className="shared-page">
          <div className="shared-header">
            <div>
              <h1>Shared Files</h1>
              <p>Manage files shared with other users.</p>
            </div>

            <button className="upload-button">
              + Share File
            </button>
          </div>

          <div className="shared-table-card">
            <div className="files-table-header">
              <h3>Shared Files</h3>
              <span>{sharedFiles.length} files</span>
            </div>

            <div className="files-table">
              <div className="file-row file-row-heading">
                <span>File Name</span>
                <span>Shared With</span>
                <span>Permission</span>
                <span>Date</span>
                <span>Status</span>
                <span>Actions</span>
              </div>

              {sharedFiles.map((file, index) => (
                <div className="file-row" key={index}>
                  <div className="file-name">
                    <div className="file-icon">📄</div>

                    <div>
                      <strong>{file.name}</strong>
                      <small>Shared File</small>
                    </div>
                  </div>

                  <span>{file.sharedWith}</span>

                  <span>{file.permission}</span>

                  <span>{file.date}</span>

                  <span className="file-status">
                    ✓ {file.status}
                  </span>

                  <div className="file-actions">
                    <button title="Manage">⚙️</button>
                    <button title="Remove Access">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SharedFiles;