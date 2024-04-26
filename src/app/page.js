import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-primary">
      <section className="container mx-auto">
        <div className="flex justify-end">
          <Image
            src="/frente-cavaliere.jpeg"
            width={450}
            height={360}
            alt="Foto del frente del local"
          />
        </div>
      </section>
    </main>
  );
}
