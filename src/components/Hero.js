const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          class="min-w-full min-h-full absolute object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/3e806d3996d243628daccc983b0f50a1.mp4"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video>
      </div>
      <div class="video-content space-y-2">
        <h1 class="font-light text-6xl">full Hero Video</h1>
        <h3 class="font-light text-3xl">with TailwindCSS</h3>
      </div>
    </section>
  );
};

export default Hero;
