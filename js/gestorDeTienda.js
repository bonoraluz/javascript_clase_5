//Esto es el simulador de una pizzería.

class Pizza{
    constructor(id, variedad, precio, tacc){
        this.id=id;
        this.variedad = variedad.toLowerCase();
        this.precio=parseFloat(precio);
        this.tacc=tacc;

    }

    sumaPropina(){
    this.precio *= 1.10;
    }   

}

const pizza1 = new Pizza(0, "Margarita", 16000, "Tiene TACC");
const pizza2 = new Pizza(1, "Especial", 20000, "Sin TACC");
const pizza3 = new Pizza(2, "Hawaiana", 22000, "Sin TACC");

const pizzas = [pizza1, pizza2, pizza3];




let listadoPizzas = "";

for (const pizza of pizzas) {
    listadoPizzas += pizza.id + " - " + pizza.variedad +
        " ($" + pizza.precio + " - "+pizza.tacc + ")\n" ;
}

let pizzaAComprar = Number(
    prompt("Bienvenido a la MichiPizzería. ¿Qué pizza deseas comprar? Elija un número:\n" + listadoPizzas)
);

pizzas[pizzaAComprar].sumaPropina();

console.log(
    "Usted eligió: " + pizzas[pizzaAComprar].variedad +
    ". Su total es: $" + pizzas[pizzaAComprar].precio +
    ". El servicio incluye propina."
);