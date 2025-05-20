const pkmnInput = document.getElementById("pkmn");
const btnBuscarPkmn = document.getElementById("boton-pkmn");
const datosPkmn = document.getElementById("resultado");

function buscarPokemon(nombre) {
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
            spritePkmn.src = data.sprites.front_default;

            datosPkmn.appendChild(nombre);
            datosPkmn.appendChild(altura);
            datosPkmn.appendChild(peso);
            datosPkmn.appendChild(tipos);
            datosPkmn.appendChild(spritePkmn);
        })
        .catch(error => {
            datosPkmn.innerHTML = "";
            const errorLi = document.createElement('li');
            errorLi.textContent = error.message;
            datosPkmn.appendChild(errorLi);
            console.error("Error al buscar el Pokemon :( ", error.message);
        });
}

const formaPrompt = prompt("Introduce el nombre de tu Pokemon favorito ;)");
buscarPokemon(formaPrompt);

btnBuscarPkmn.addEventListener("click", () => {
    buscarPokemon(pkmnInput.value.trim().toLowerCase());
});