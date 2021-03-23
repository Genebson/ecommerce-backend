// Realizaremos una función que reciba un objeto, y muestre 
//cada dos segundos sus claves 
//y valores en este formato: [clave, valor].

// El proceso no debe ser bloqueante.

// Utilizaremos las nuevas funciones de ES8: entries, async await
const objetoSaludar = {
  a: 'hola',
  b: 'como',
  c: 'estás'
};

const Saludar = async () => {
  console.log('Arranca la función')
  console.log(Object.entries(objetoSaludar));
}

Saludar()