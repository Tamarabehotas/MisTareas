( () =>{
const btn = document.querySelector("[data-btn-agregar]");
const nuevaTarea = (evento) => {
  evento.preventDefault();
  const input= document.querySelector("[data-ingrese-tarea]");
    const inputValor = input.value;
    const lista=document.querySelector("[data-lista-tarea]");
      const tareaNueva = document.createElement("li");
        tareaNueva.classList.add("tareas");
          const div= document.createElement("div");
          div.classList.add("div__tareas")   
          const spanTarea= document.createElement("span");
          spanTarea.classList.add("tarea");
          spanTarea.innerHTML = inputValor;

    input.value = "";
        
    lista.appendChild(tareaNueva);
      tareaNueva.appendChild(div);
        div.appendChild(check());
        div.appendChild(spanTarea);
      tareaNueva.appendChild(trash());
};

btn.addEventListener("click", nuevaTarea);

const check= () => { 
  const i = document.createElement("i");
  i.classList.add("bi", "bi-check-circle");
  i.addEventListener("click", tareaCompleta)
  return i;
};

const tareaCompleta= (event) =>{
  elemento = event.target;
  elemento.classList.toggle("bi-check-circle-fill")
  elemento.classList.toggle("verde")
  elemento.classList.toggle("bi-check-circle")
};

const trash=()=>{
  const i = document.createElement("i");
  i.classList.add("bi", "bi-trash3");
  i.addEventListener("click", eliminarTarea)
  return i;
};

const eliminarTarea=(event) =>{
  const tareaLista = event.target.parentElement;
  tareaLista.remove();
};

}) ();

