const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full absolute object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/3e806d3996d243628daccc983b0f50a1.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </section>
  );
};

export default Hero;
