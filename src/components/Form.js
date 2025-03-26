import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <div className="py-10">
      <form class="mx-auto max-w-md">
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="email"
            id="email"
            class="focus:border-secondary peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
            placeholder=" "
            required
          />
          <label
            for="email"
            class="peer-focus:text-secondary absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            Email
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="first_name"
              id="first_name"
              class="focus:border-secondary peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label
              for="first_name"
              class="peer-focus:text-secondary absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:translate-x-1/4"
            >
              Nombre
            </label>
          </div>
          <div class="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="last_name"
              id="last_name"
              class="focus:border-secondary peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label
              for="last_name"
              class="peer-focus:text-secondary absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:translate-x-1/4"
            >
              Apellido
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="group relative z-0 mb-5 w-full">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              id="phone"
              class="focus:border-secondary peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label
              for="phone"
              class="peer-focus:text-secondary absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:translate-x-1/4"
            >
              Teléfono de contacto
            </label>
          </div>
          <div class="group relative z-0 mb-5 w-full">
            <textarea
              type="text"
              name="message"
              id="message"
              class="focus:border-secondary peer block h-fit w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label
              for="message"
              class="peer-focus:text-secondary absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:translate-x-1/4"
            >
              Mensaje
            </label>
          </div>
        </div>
        <Button>Enviar</Button>
      </form>
    </div>
  );
};

export default Form;
