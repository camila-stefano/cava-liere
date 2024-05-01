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
        <li>HISTORIA</li>
        <li>TIENDA</li>
        <li>VINOS DE AUTOR</li>
        <li>BEBIDAS VARIAS</li>
        <li>REGALOS</li>
      </ul>
    </header>
  );
};

export default Header;
