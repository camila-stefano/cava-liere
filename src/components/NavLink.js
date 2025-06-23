const NavLink = ({ href, children }) => {
  return (
    <li>
      <a href="{href}" className="border-b-secondary hover:border-b-2">
        {children}
      </a>
    </li>
  );
};

export default NavLink;
