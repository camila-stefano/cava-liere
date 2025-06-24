import Link from "next/link";

const NavLink = ({ href, label }) => {
  return (
    <Link href={href} className="text-sm font-medium hover:border-b-2">
      {label}
    </Link>
  );
};

export default NavLink;
