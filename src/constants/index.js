//Marcas de autos----------------------------
export const marcas = [
  { id: 1, nombre: "Europeo" },
  { id: 2, nombre: "Americano" },
  { id: 3, nombre: "Asiatico" },
];

//Calculando los ultimos 10 años--------------
const yearMax = new Date().getFullYear();
export const years = [];
for (let i = yearMax; i > yearMax - 10; i--) {
  years.push(i);
}

//Planes-------------------------------------
export const planes = [
  { id: 1, nombre: "Basico" },
  { id: 2, nombre: "Completo" },
];
