const estrategias = [
  {
    titulo: "El poder del silencio",
    texto: "A veces, el silencio es la mejor respuesta. Habla menos, observa más."
  },
  {
    titulo: "Movimiento imprevisible",
    texto: "Como en ajedrez: no seas predecible. Cambia el ritmo y el orden cuando te observan."
  },
  {
    titulo: "Esconde tu energía",
    texto: "Actúa tranquilo aunque estés preparado para la tormenta. La sorpresa es tu mejor arma."
  },
  {
    titulo: "Visualización y la Ley Nº 29: Planifica hasta el final",
    texto: 'Visualizar no es soñar en abstracto; es ver con claridad el destino. La Ley 29 de Robert Greene dice "Planifica hasta el final". Combinar ambas te permite recorrer mentalmente cada paso antes de actuar: defines tu objetivo, visualizas hacia atrás desde el éxito, anticipas amenazas y diseñas una ruta flexible. Visualizar el final es planificar con los ojos del alma.<br><br><a href="ley29.html" target="_blank">Leer reflexión completa sobre la Ley 29</a>'
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-estrategias");
  if (!contenedor) return;

  const fragmento = document.createDocumentFragment();

  estrategias.forEach(estrategia => {
    const seccion = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = estrategia.titulo;
    p.innerHTML = estrategia.texto;  // <- CAMBIO CLAVE AQUÍ

    h2.addEventListener("click", () => {
      seccion.classList.toggle("mostrar");
    });

    seccion.appendChild(h2);
    seccion.appendChild(p);
    fragmento.appendChild(seccion);
  });

  contenedor.appendChild(fragmento);

  // Mostrar/Ocultar todo
  const botonToggle = document.getElementById("toggle-todo");
  let todoVisible = false;

  botonToggle?.addEventListener("click", () => {
    todoVisible = !todoVisible;
    document.querySelectorAll("#contenedor-estrategias section").forEach(seccion => {
      seccion.classList.toggle("mostrar", todoVisible);
    });
    botonToggle.textContent = todoVisible ? "Ocultar todo" : "Mostrar todo";
  });

  // Audio fondo
  const audio = document.getElementById("audio-fondo");
  if (audio) audio.volume = 0.5;

  // Botón silenciar
  const botonAudio = document.getElementById("toggle-audio");
  botonAudio?.addEventListener("click", () => {
    if (audio) {
      audio.muted = !audio.muted;
      botonAudio.textContent = audio.muted ? "🔇" : "🔊";
    }
  });
});




