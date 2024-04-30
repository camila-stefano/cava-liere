import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-primary flex justify-center items-center border-b-secondary py-4 border-b-2">
      <ul className="flex gap-10 text-white text-sm font-maison tracking-wider">
        <li>HISTORIA</li>
        <li>STORE</li>
      </ul>
      <div className="px-8 pb-4">
        <Image
          src="/logo-cavaliere-transparent.png"
          width={100}
          height={64}
          alt="Logo Cavaliere"
        />
      </div>
      <ul className="flex gap-10 text-white text-sm font-maison tracking-wider">
        <li>VINOS</li>
        <li>BEBIDAS VARIAS</li>
      </ul>
    </header>
  );
};

export default Header;
