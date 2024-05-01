import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white py-0 px-0 bg-primary">
      <div className="video-docker top-0 left-0 overflow-hidden]">
        <video
          className="min-w-full object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/3e806d3996d243628daccc983b0f50a1.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      <div className="my-12 text-center">
        <h3 className="text-secondary tracking-widest ">DESDE 2016</h3>
        <h2 className="py-2 text-white">Te damos la bienvenida a Cavaliere</h2>
        <p className="text-secondary tracking-wide">- - - - -</p>
        <p className=" py-2 text-white max-w-xl">
          Fundada en el a;o 2016, Cavaliere es una Vinoteca Boutique atendida
          por su propio due;o. Podras encontrar vinos de autor, bebidas
          nacionales e internacionales. Regalos, cervezas y mucho mas...
        </p>
      </div>
      <div>
        <Button>Nuestra historia</Button>
      </div>
    </section>
  );
};

export default Hero;
