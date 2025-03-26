import Button from "@/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-0 py-0 text-white">
      <div className="bg-middle flex min-h-[500px] w-full flex-col items-center justify-center gap-4 bg-[url('/img/hero-pattern.jpg')] bg-cover">
        <h1 className="container text-4xl font-light tracking-tight sm:text-6xl">
          <span className="text-6xl tracking-[.1em] sm:text-9xl">
            Cavaliere
          </span>
          ,<br /> espacio de bebidas
        </h1>
      </div>
      <div className="my- container my-20 flex flex-wrap justify-between">
        <div>
          <h3 className="text-secondary tracking-widest">SINCE 2016</h3>
          <h2 className="py-1 text-white">Brindando experiencias unicas</h2>
          <p className="max-w-xl py-2 text-white">
            Lorem Ipsun djdkjkaskjkdjjdidj
          </p>
          <a
            href=""
            className="hover:border-b-secondary border-b-2 border-b-white"
          >
            Lee sobre
          </a>
        </div>
        <div>
          <h3 className="text-secondary tracking-widest">SINCE 2016</h3>
          <h2 className="py-1 text-white">Brindando experiencias unicas</h2>
          <p className="max-w-xl py-2 text-white">
            Lorem Ipsun djdkjkaskjkdjjdidj
          </p>
          <a
            href=""
            className="hover:border-b-secondary border-b-2 border-b-white"
          >
            Lee sobre
          </a>
        </div>
        <div>
          <h3 className="text-secondary tracking-widest">SINCE 2016</h3>
          <h2 className="py-1 text-white">Brindando experiencias unicas</h2>
          <p className="max-w-xl py-2 text-white">
            Lorem Ipsun djdkjkaskjkdjjdidj
          </p>
          <a
            href=""
            className="hover:border-b-secondary border-b-2 border-b-white"
          >
            Lee sobre
          </a>
        </div>
      </div>
      <div className="container flex w-full gap-4">
        <div className="flex w-2/4">
          <Image
            className=""
            src="/frente-cavaliere.jpeg"
            width={450}
            height={400}
            alt="Foto frente del local"
          />
        </div>
        <div className="flex w-2/4 flex-col">
          <h3 className="text-secondary tracking-widest">NUESTRO LOCAL</h3>
          <h2 className="py-2 text-white">Brindando experiencias unicas</h2>
          <p className="max-w-xl py-2 text-white">
            Lorem Ipsun djdkjkaskjkdjjdidj
          </p>
          <Button className="">Como llegar</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
