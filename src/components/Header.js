import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-primary flex justify-center items-center border-b-secondary pt-2 border-b-2">
      <ul className="flex gap-10 text-white text-sm font-roboto tracking-wider">
        <li>HISTORIA</li>
        <li>TIENDA</li>
      </ul>
      <div className="px-8 pb-4">
        <Image
          src="/logo-cavaliere-transparent.png"
          width={100}
          height={64}
          alt="Logo Cavaliere"
        />
      </div>
      <ul className="flex gap-10 text-white text-sm font-roboto tracking-wider">
        <li>VINOS</li>
        <li>REGALOS</li>
      </ul>
    </header>
  );
};

export default Header;
