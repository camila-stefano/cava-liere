import Link from "next/link";

const NavLink = ({ href, label }) => {
  return (
    <Link href={href} className="border-b-2 px-4 py-2 text-sm font-medium">
      {label}
    </Link>
  );
};

export default NavLink;
