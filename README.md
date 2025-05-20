# Poke API

Para la Poke API, he decidio que hayan dos formas de pedir al usuario que ingrese un Pokemon:
- `Prompt`: Esta función de Java Script permite que, al iniciar el programa / página, salte una ventana de aviso, como el `alert`. Sin embargo, `prompt` pide una entrada, mientras que `alert` solo muestra un mensaje.
Tras ingresar el nombre, si es que existe el Pokemon, se muestran el nombre, altura (en decímetros), peso (en hectogramos) y los tipos de dicha criatura.
- `nombreInput`: El el valor que el usuario escribe en el formulario del HTML. Este, pasa a ser formateado por el `.trim()` y el `.toLowerCase()` con el fin de hacer de cualquier forma que se pille el nombre del Pokemon,
al convertirlo en minúsculas además de quitarle cualquier mayúscula.
