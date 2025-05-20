const pkmnInput = document.getElementById("pkmn");
const btnBuscarPkmn = document.getElementById("boton-pkmn");
const datosPkmn = document.getElementById("resultado");

//Función que busca al pokemon y se encarga de mostrar los datos en la página
function buscarPokemon(nombre) {
    // Convierte el nombre del Pokemon a un formato
    const nombrePokemon = nombre.trim().toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokemon no encontrado...");
            }
            return response.json();
        })
        .then(data => {
            datosPkmn.innerHTML = '';

            //Pilla los datos del Pokemon y los mete a una sublista, que después se enlazan a la lista del HTML
            const nombre = document.createElement('li');
            nombre.textContent = `Nombre: ${data.name}`;

            const altura = document.createElement('li');
            altura.textContent = `Altura en decímetros: ${data.height}`;

            const peso = document.createElement('li');
            peso.textContent = `Peso en hectogramos: ${data.weight}`;

            const tipos = document.createElement('li');
            const nombreTipos = data.types.map(tipoInfo => tipoInfo.type.name).join(', ');
            tipos.textContent = `Combinación de tipos: ${nombreTipos}`;

            const spritePkmn = document.createElement('img');
            spritePkmn.src = data.sprites.front_default; //Como pusiste en el revilofe

            datosPkmn.appendChild(nombre);
            datosPkmn.appendChild(altura);
            datosPkmn.appendChild(peso);
            datosPkmn.appendChild(tipos);
            datosPkmn.appendChild(spritePkmn);
        })
        //Aquí se captura cualquier error y se muestra en la consola
        .catch(error => {
            datosPkmn.innerHTML = "";
            const errorLi = document.createElement('li');
            errorLi.textContent = error.message;
            datosPkmn.appendChild(errorLi);
            console.error("Error al buscar el Pokemon :( ", error.message);
        });
}

//Aviso del prompt para pedir el nombre del Pokemon al iniciar el programa
const formaPrompt = prompt("Introduce el nombre de tu Pokemon favorito ;)");
buscarPokemon(formaPrompt);

//Otra forma, al pulsar el botón busca por el nombre del Input
btnBuscarPkmn.addEventListener("click", () => {
    buscarPokemon(pkmnInput.value.trim().toLowerCase());
});