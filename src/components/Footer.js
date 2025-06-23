const Footer = () => {
  return (
    <section className="container mx-auto my-0">
      <div className="flex justify-between text-white">
        <div>
          <h2>Nuestro Local</h2>
          <p>Olavarría 3165, Mar del Plata</p>
          <p>
            WhatsApp:{" "}
            <a href="https://api.whatsapp.com/send?phone=542236969901">
              {" "}
              +54 223 696-9901
            </a>
          </p>
        </div>
        <div>
          <h2>Horario de atención</h2>
          <p>Lunes a Sabados 10:00 - 21:00</p>
        </div>
        <div>
          <h2>Medios de pago</h2>
          <p>Efectivo</p>
          <p>Tarjeta de crédito</p>
          <p>Tarjeta de débito</p>
          <p>Transferencia bancaria</p>
          <p>Modo / Mercado Pago</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
