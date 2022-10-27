import { createContext, useState } from "react";

const CotizadorContext = createContext();

export const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState("");

  return (
    <CotizadorContext.Provider
      value={{ datos, setDatos, error, setError, resultado, setResultado }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export default CotizadorContext;
