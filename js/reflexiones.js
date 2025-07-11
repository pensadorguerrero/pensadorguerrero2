const reflexiones = [
  {
    titulo: "La metáfora del pájaro y la rama",
    contenido: "El pájaro se posa tranquilo sobre la rama, no porque confíe en ella, sino porque confía en sus alas. [...]"
  },
  {
    titulo: "La armadura invisible",
    contenido: "Muchos caminan por la vida cubiertos con una armadura que nadie ve. [...]"
  },
  {
    titulo: "Fuego en la rutina",
    contenido: "Hay quienes huyen de la rutina como si fuera una cárcel. [...]"
  },
  {
    titulo: "El filo del silencio",
    contenido: "El mundo habla demasiado. Opiniones, notificaciones, voces vacías. [...]"
  },
  {
    titulo: "Cicatrices que enseñan",
    contenido: "Cada cicatriz cuenta una historia. No son marcas de debilidad, sino señales de que sobreviviste. [...]"
  },
  {
    titulo: "El centinela y el eco",
    contenido: "Una historia sobre la diferencia entre la ansiedad y la preparación. Haz clic para leerla completa.",
    enlace: "reflexiones/eco.html"
  }
];

const contenedor = document.getElementById("contenedor-reflexiones");

reflexiones.forEach(ref => {
  const details = document.createElement("details");
  details.classList.add("border", "rounded", "p-2");

  const summary = document.createElement("summary");
  summary.classList.add("cursor-pointer", "font-semibold");
  summary.textContent = ref.titulo;

  details.appendChild(summary);

  if (ref.enlace) {
    const link = document.createElement("a");
    link.href = ref.enlace;
    link.textContent = "Leer la reflexión completa →";
    link.classList.add("text-blue-600", "hover:underline", "block", "mt-2");
    details.appendChild(link);
  } else {
    const p = document.createElement("p");
    p.classList.add("mt-2");
    p.textContent = ref.contenido;
    details.appendChild(p);
  }

  contenedor.appendChild(details);
});
