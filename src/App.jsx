import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import useCotizador from "./hooks/useCotizador";

function App() {
  const { resultado } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-transparent text-center text-6xl bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
          Cotizador{" "}
          <span className="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Seguro de Autos
          </span>
        </h1>
      </header>
      <main className="bg-white w-11/12 md:w-2/3 lg:1/2 mx-auto shadow rounded-lg pt-4 pb-8 px-10">
        <Formulario />
        {resultado !== "" && <Resultado />}
      </main>
    </>
  );
}

export default App;
