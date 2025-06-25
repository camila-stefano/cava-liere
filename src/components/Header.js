import Image from "next/image";
import NavLink from "./NavLink";
import Button from "./Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-black py-2">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="">
          <Image
            src="/logo-cavaliere-transparent.png"
            width={100}
            height={64}
            alt="Logo Cavaliere"
          />
        </div>
        <ul className="flex gap-10 text-sm tracking-wider text-white">
          <li>
            <NavLink href="/store" label="Store" />
          </li>
          <li>
            <NavLink href="/productos" label="Productos" />
          </li>
          <li>
            <NavLink href="/eventos" label="La veredita" />
          </li>
        </ul>
        <div>
          <Button variant="darkTheme">Contacto</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
