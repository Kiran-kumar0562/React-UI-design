function Header({ title, profileInitial }) {
  return (
    <div className="header">
      {/* Hamburger menu */}
      <div className="menu-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Page title / user greeting */}
      <h2 className="header-title">{title}</h2>

      {/* Profile avatar */}
      <div className="profile-avatar">{profileInitial}</div>
    </div>
  );
}

export default Header;