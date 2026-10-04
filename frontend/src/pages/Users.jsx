import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Users.css";

function Users() {
  const users = [
    {
      name: "Admin User",
      email: "admin@skyguard.com",
      role: "Administrator",
      permission: "Full Access",
      status: "Active",
    },
    {
      name: "Tashmeet",
      email: "tashmeet@skyguard.com",
      role: "Manager",
      permission: "Read & Write",
      status: "Active",
    },
    {
      name: "Rahul Sharma",
      email: "rahul@skyguard.com",
      role: "User",
      permission: "Read Only",
      status: "Active",
    },
    {
      name: "Priya Singh",
      email: "priya@skyguard.com",
      role: "User",
      permission: "Read Only",
      status: "Inactive",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <div className="users-page">
          <div className="users-header">
            <div>
              <h1>Users & Roles</h1>
              <p>Manage users and their access permissions.</p>
            </div>

            <button className="upload-button">
              + Add User
            </button>
          </div>

          <div className="users-summary">
            <div className="user-summary-card">
              <span>👥</span>
              <div>
                <strong>{users.length}</strong>
                <small>Total Users</small>
              </div>
            </div>

            <div className="user-summary-card">
              <span>🛡️</span>
              <div>
                <strong>3</strong>
                <small>Active Users</small>
              </div>
            </div>

            <div className="user-summary-card">
              <span>🔐</span>
              <div>
                <strong>3</strong>
                <small>Roles</small>
              </div>
            </div>
          </div>

          <div className="users-table-card">
            <div className="files-table-header">
              <div>
                <h3>All Users</h3>
                <span>Manage user access and roles</span>
              </div>
            </div>

            <div className="users-table">
              <div className="user-row user-row-heading">
                <span>User</span>
                <span>Role</span>
                <span>Permission</span>
                <span>Status</span>
                <span>Actions</span>
              </div>

              {users.map((user, index) => (
                <div className="user-row" key={index}>
                  <div className="user-details">
                    <div className="user-avatar-small">
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <strong>{user.name}</strong>
                      <small>{user.email}</small>
                    </div>
                  </div>

                  <span className="role-badge">
                    {user.role}
                  </span>

                  <span>{user.permission}</span>

                  <span
                    className={`user-status ${
                      user.status === "Active"
                        ? "active"
                        : "inactive"
                    }`}
                  >
                    ● {user.status}
                  </span>

                  <div className="user-actions">
                    <button title="Edit">✏️</button>
                    <button title="Manage Access">🔐</button>
                    <button title="Delete">🗑️</button>
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

export default Users;