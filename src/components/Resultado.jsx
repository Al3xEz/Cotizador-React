import { useCallback } from "react";
import useCotizador from "../hooks/useCotizador";
import { marcas, planes } from "../constants";
const Resultado = () => {
  const { resultado, setResultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  const [nombreMarca] = marcas.filter((item) => item.id === Number(marca));
  const [nombrePlan] = planes.filter((item) => item.id === Number(plan));

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-500 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {useCallback(nombreMarca?.nombre, [resultado])}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {useCallback(nombrePlan?.nombre, [resultado])}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del Auto: </span>
        {useCallback(year, [resultado])}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {resultado}
      </p>
    </div>
  );
};

export default Resultado;
