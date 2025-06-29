const reflexiones = [
  {
    titulo: "La metáfora del pájaro y la rama",
    contenido: "El pájaro se posa tranquilo sobre la rama, no porque confíe en ella, sino porque confía en sus alas. El guerrero no depende de un suelo firme, de una situación estable ni de la aprobación externa. Su fuerza está dentro. La rama puede quebrarse, el viento puede cambiar, pero mientras tenga alas —disciplina, voluntad, temple— volará otra vez. Quien basa su seguridad en lo externo vive con miedo. Quien cultiva el poder interior camina sin temblar, aunque el mundo a su alrededor se derrumbe. No te aferres a la rama. Entrena tus alas."
  },
  {
    titulo: "La armadura invisible",
    contenido: "Muchos caminan por la vida cubiertos con una armadura que nadie ve. Hecha de indiferencia, sarcasmo, aislamiento. Se construye con decepciones, se refuerza con miedos. Parece proteger, pero encierra. El guerrero también ha sido herido. Pero no se queda escondido detrás del metal. Aprende a reconocer su coraza, a quitarla cuando hace falta, y a mostrar su rostro al mundo sin vergüenza. Las verdaderas heridas no están en la piel, sino en el alma. Y las verdaderas cicatrices no son debilidades: son señales de que sanaste. Desnudar el alma también es un acto de guerra."
  },
  {
    titulo: "Fuego en la rutina",
    contenido: "Hay quienes huyen de la rutina como si fuera una cárcel. Pero el guerrero sabe que en la repetición diaria se forja la grandeza. Levantarse a la misma hora. Respirar hondo. Entrenar el cuerpo. Leer. Pensar. Comer con intención. Escribir lo vivido. No hay gloria sin monotonía. No hay maestría sin constancia. Cada día aparentemente igual no es una copia, es una capa más sobre la armadura del carácter. Cuando todo el mundo se dispersa en distracciones, tú te mantienes firme, ardiendo por dentro. No huyas de la rutina: domínala, y te hará imparable."
  },
  {
    titulo: "El filo del silencio",
    contenido: "El mundo habla demasiado. Opiniones, notificaciones, voces vacías. Pero el guerrero no teme al silencio: lo busca. En el silencio afila su mente como una espada. En el silencio escucha su respiración, su pulso, su verdad. Allí donde el ruido se apaga, el espíritu se escucha con nitidez. La calma no es ausencia de lucha: es su control perfecto. No todos saben estar consigo mismos. El que domina el silencio, domina su impulso. Y el que domina su impulso, puede decidir cuándo atacar, cuándo esperar, cuándo retirarse. El silencio es filo. No ruido. No reacción. Precisión."
  },
  {
    titulo: "Cicatrices que enseñan",
    contenido: "Cada cicatriz cuenta una historia. No son marcas de debilidad, sino señales de que sobreviviste. Que resististe. Que luchaste. Que aprendiste. Las cicatrices del guerrero no buscan lástima, ni son trofeos vacíos. Son mapas del camino andado. Algunas duelen al tocarlas. Otras se volvieron parte de la piel. Pero todas enseñan algo. Que el dolor es parte del viaje. Que caerse no es el final. Que sanar también es parte del combate. No escondas tus cicatrices. Muéstralas con honor. Porque hablan de una batalla real: la tuya."
  }
];

const contenedor = document.getElementById("contenedor-reflexiones");

reflexiones.forEach(ref => {
  const details = document.createElement("details");
  details.classList.add("border", "rounded", "p-2");

  const summary = document.createElement("summary");
  summary.classList.add("cursor-pointer", "font-semibold");
  summary.textContent = ref.titulo;

  const p = document.createElement("p");
  p.classList.add("mt-2");
  p.textContent = ref.contenido;

  details.appendChild(summary);
  details.appendChild(p);
  contenedor.appendChild(details);
});

// Función para mostrar/ocultar todas las reflexiones
let reflexionesMostradas = false;
function toggleAllReflexiones() {
  const detalles = document.querySelectorAll('#contenedor-reflexiones details');
  reflexionesMostradas = !reflexionesMostradas;
  detalles.forEach(d => d.open = reflexionesMostradas);
  document.querySelector('button').textContent = reflexionesMostradas ? "Ocultar todo" : "Mostrar todo";
}
