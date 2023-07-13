const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Ej 1: pizzas impar.
pizzas.forEach ((pizza) =>{
  if (pizza.id % 2 !==0){
    console.log("ID" + pizza.id + "Nombre:" + pizza.nombre + "es impar")
  }
})

// Ej 2: Pizza < a 600.
console.log(`b) Las pizzas que valen menos de $600 son:`)
pizzas.forEach(pizza =>{

  if(pizza.precio<600){
    console.log(pizza.nombre)
  }

})

// Ej 3: cada pizza con su precio.
console.log(`c) Información de las pizzas:`)
pizzas.forEach((pizza) =>{

  console.log(`La ${pizza.nombre} vale $${pizza.precio}`)

})

// Ej 4: Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).
console.log(`d) Ingredientes de las pizzas:`)


pizzas.forEach(pizza =>{
  console.log(`La ${pizza.nombre} tiene:`)
  let i=0}
  while(i<pizza.ingredientes.length){
    console.log(pizza.ingredientes[i])
    i++
  }
)