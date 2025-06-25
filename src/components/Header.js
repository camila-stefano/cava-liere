import Image from "next/image";
import NavLink from "./NavLink";
import Button from "./Button";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between">
      <div className="">
        <Image
          src="/logo-cavaliere-black.png"
          width={100}
          height={100}
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
          <NavLink href="/contacto" label="Contacto" />
        </li>
      </ul>
      <div>
        <Button variant="darkTheme">Contacto</Button>
      </div>
    </header>
  );
};

export default Header;
