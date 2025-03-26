import Image from "next/image";

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
          <a href="" className="border-b-secondary hover:border-b-2">
            Nuestro Local
          </a>
        </li>
        <li>
          <a href="" className="border-b-secondary hover:border-b-2">
            Productos
          </a>
        </li>
        <li>
          <a href="" className="border-b-secondary hover:border-b-2">
            Regalos
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
