import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center">
      <div className="">
        <Image
          src="/logo-cavaliere.jpeg"
          width={100}
          height={100}
          alt="Logo Cavaliere"
        />
      </div>
      <ul className="flex gap-10 text-white text-sm tracking-wider">
        <li>
          <a href="" className="hover:border-b-2 border-b-secondary">
            Nuestro Local
          </a>
        </li>
        <li>
          <a href="" className="hover:border-b-2 border-b-secondary">
            Productos
          </a>
        </li>
        <li>
          <a href="" className="hover:border-b-2 border-b-secondary">
            Regalos
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
