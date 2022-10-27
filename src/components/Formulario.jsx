import { marcas, years, planes } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";
import { formatearDinero } from "../helpers";

const Formulario = () => {
  const { datos, setDatos, error, setError, setResultado } = useCotizador();

  const cotizarSeguro = () => {
    let totalSeguro = 2000;

    const diferenciaYear = new Date().getFullYear() - datos.year;
    totalSeguro -= totalSeguro * (diferenciaYear * 0.03);

    switch (datos.marca) {
      //Europeo 30%
      case "1":
        totalSeguro *= 1.3;
        break;
      //Americano 15%
      case "2":
        totalSeguro *= 1.15;
        break;
      //Asiatico 5%
      case "3":
        totalSeguro *= 1.05;
        break;
    }

    if (datos.plan === "1") {
      //Plan Basico 20%
      totalSeguro *= 1.2;
    } else {
      //Plan Completo 50%
      totalSeguro *= 1.5;
    }

    totalSeguro = formatearDinero(totalSeguro);

    setResultado(totalSeguro);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(datos).includes("")) {
      setError(true);
      return;
    }
    setError(false);
    cotizarSeguro();
  };

  return (
    <>
      {error && <Error error={"Todos los campos son obligatorios"} />}
      {/*----------------- Formulario -----------------*/}
      <form onSubmit={handleSubmit}>
        {/*------------ Campo Marca------------*/}
        <div className="my-5">
          {/*------- Titulo -------*/}
          <label
            className="block mb-3 font-bold text-gray-400 uppercase text-center text-xl"
            htmlFor=""
          >
            Marca
          </label>

          {/*------- Select -------*/}
          <select
            className="appearance-none w-full p-3 bg-white border border-gray-400 rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
            name="marca"
            id="marca"
            onChange={(event) => {
              setDatos({ ...datos, [event.target.name]: event.target.value });
            }}
            value={datos.marca}
          >
            <option className="text-center" value="">
              -- Seleccione Marca --
            </option>
            {marcas.map((marca) => (
              <option key={marca.id} className="text-center" value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        {/*------------ Campo Año------------*/}
        <div className="my-5">
          {/*------- Titulo -------*/}
          <label
            className="block mb-3 font-bold text-gray-400 uppercase text-center text-xl"
            htmlFor=""
          >
            Año
          </label>

          {/*------- Select -------*/}
          <select
            className="appearance-none w-full p-3 bg-white border border-gray-400 rounded-lg focus:ring-cyan-600 focus:border-cyan-600"
            name="year"
            id="year"
            onChange={(event) => {
              setDatos({ ...datos, [event.target.name]: event.target.value });
            }}
            value={datos.year}
          >
            <option className="text-center" value="">
              -- Seleccione Año --
            </option>
            {years.map((year) => (
              <option key={year} className="text-center" value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/*------------ Campo Plan------------*/}
        <div className="my-5">
          {/*------- Titulo -------*/}
          <label
            className="block mb-3 font-bold text-gray-400 uppercase text-center text-xl"
            htmlFor=""
          >
            Elige un Plan
          </label>

          <div className="flex gap-3 justify-center">
            {planes.map((plan) => (
              <div className="flex gap-1" key={plan.id} value={plan.nombre}>
                <label htmlFor={plan.nombre}>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  id={plan.nombre}
                  value={plan.id}
                  onChange={(event) => {
                    setDatos({
                      ...datos,
                      [event.target.name]: event.target.value,
                    });
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/*------------ Submit ------------*/}
        <input
          type="submit"
          value="Cotizar"
          className="mt-2 w-full bg-cyan-600 hover:bg-orange-600 hover:cursor-pointer transition duration-300 text-white uppercase font-bold p-3 rounded-xl"
        />
      </form>
    </>
  );
};

export default Formulario;
