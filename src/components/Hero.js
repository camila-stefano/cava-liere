import Button from "@/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white py-0 px-0 ">
      <div className="bg-[url('/img/hero-pattern.jpg')] bg-cover min-h-[500px] bg-middle	 w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-light tracking-tight sm:text-6xl container ">
          <span className="sm:text-9xl text-6xl tracking-[.1em]">
            Cavaliere
          </span>
          ,<br /> espacio de bebidas
        </h1>
      </div>
      <div className="my-20 my- flex flex-wrap container justify-between">
        <div>
          <h3 className="text-secondary tracking-widest">SINCE 2016</h3>
          <h2 className="py-1 text-white">Brindando experiencias unicas</h2>
          <p className=" py-2 text-white max-w-xl">
            Lorem Ipsun djdkjkaskjkdjjdidj
          </p>
          <a
            href=""
            className="border-b-2 border-b-white hover:border-b-secondary"
          >
            Lee sobre
          </a>
        </div>
        <div>
          <h3 className="text-secondary tracking-widest ">SINCE 2016</h3>
          <h2 className="py-1 text-white">Brindando experiencias unicas</h2>
          <p className=" py-2 text-white max-w-xl">
            Lorem Ipsun djdkjkaskjkdjjdidj
          </p>
          <a
            href=""
            className="border-b-2 border-b-white hover:border-b-secondary"
          >
            Lee sobre
          </a>
        </div>
        <div>
          <h3 className="text-secondary tracking-widest ">SINCE 2016</h3>
          <h2 className="py-1 text-white">Brindando experiencias unicas</h2>
          <p className=" py-2 text-white max-w-xl">
            Lorem Ipsun djdkjkaskjkdjjdidj
          </p>
          <a
            href=""
            className="border-b-2 border-b-white hover:border-b-secondary"
          >
            Lee sobre
          </a>
        </div>
      </div>
      <div className="flex gap-4 w-full container">
        <div className="flex w-2/4">
          <Image
            className=""
            src="/frente-cavaliere.jpeg"
            width={450}
            height={400}
            alt="Foto frente del local"
          />
        </div>
        <div className="w-2/4 flex flex-col">
          <h3 className="text-secondary tracking-widest ">NUESTRO LOCAL</h3>
          <h2 className="py-2 text-white">Brindando experiencias unicas</h2>
          <p className=" py-2 text-white max-w-xl">
            Lorem Ipsun djdkjkaskjkdjjdidj
          </p>
          <Button className="">Como llegar</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
