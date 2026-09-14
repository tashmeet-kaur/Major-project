import "./Header.css";

function Header() {
  return (
    <header className="dashboard-topbar">

      {/* Search */}
      <div className="header-search">
        <span className="search-icon">⌕</span>
        <input
          type="text"
          placeholder="Search files, users, or events..."
        />
      </div>

      {/* Right Side */}
      <div className="header-right">

        {/* Notifications */}
        <button className="notification-button">
          🔔
          <span className="notification-count">3</span>
        </button>

        {/* Divider */}
        <div className="header-divider"></div>

        {/* User Profile */}
        <div className="user-profile">

          <div className="user-avatar">
            T
          </div>

          <div className="user-info">
            <strong>Admin User</strong>
            <span>Security Administrator</span>
          </div>

          <span className="profile-arrow">⌄</span>

        </div>

      </div>

    </header>
  );
}

export default Header;