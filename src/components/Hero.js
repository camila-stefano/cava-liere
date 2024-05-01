import Button from "@/components/Button";
import Card from "@/components/Card";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white py-0 px-0 ">
      <div className="bg-[url('/img/hero-pattern.jpeg')] bg-cover min-h-[500px] bg-bottom	 w-full flex items-center justify-center">
        <h1>CAVALIERE</h1>
      </div>
      <div className="my-10 text-center">
        <h3 className="text-secondary tracking-widest ">SINCE 2016</h3>
        <h2 className="py-2 text-white">Te damos la bienvenida a Cavaliere</h2>
        <p className="text-secondary tracking-wide">- - - - -</p>
        <p className=" pt-2 text-white max-w-xl">
          Fundada en el a;o 2016, Cavaliere es una Vinoteca Boutique atendida
          por su propio due;o. Podras encontrar vinos de autor, bebidas
          nacionales e internacionales. Regalos, cervezas y mucho mas...
        </p>
      </div>
      <div className="flex gap-6 flex-wrap justify-center">
        <Card src={"/vinitos.jpeg"} alt={"Foto de vinos"} />
        <Card src={"/frente-cavaliere.jpeg"} alt={"Foto frente del local"} />
        <Card src={"/wisky.jpeg"} alt={"Foto con botellas de licores"} />
      </div>
      <div className="pt-2">
        <Button>Nuestra historia</Button>
      </div>
    </section>
  );
};

export default Hero;
