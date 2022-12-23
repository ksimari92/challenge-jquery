let arquitectura = [];
let aguaCloaca = [];
let vialidad = [];

function distribuirDatos(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].forEach(item => {
       if (item.Categoría_1 == 'Arquitectura'){
        arquitectura.push(item);
      } else if (item.Categoría_1 == 'Agua y Cloacas'){
        aguaCloaca.push(item);
      } else if (item.Categoría_1 == 'Vialidad'){
        vialidad.push(item)
      }
    });
      
    }
    console.log(arquitectura, aguaCloaca, vialidad)
  };


function calcularMonto(array){
  console.log(array)
  let total =0;
  for(item of array){
    total+= Number(item.MontoActualizado);
  }
  return total;
}

function crearTarjetas(categoria, obras, totalMonto, icono){

    $("div.contenedor-cards").append(`  <div class="card">
         <h4 class="titulo-card">${categoria}</h4>
          <div class="info">
          <img src="${icono}"/>
           <div class="monto">
                <p>Obras: <span id="#obra">${obras.length}</span></p>
                  <p>Monto: $ <span id="monto">${totalMonto}</span></p>
             </div>
             <button id="btn-${categoria.toLowerCase()}" class="btn-ver"><img id="${categoria.toLowerCase()}" src="img/icons8-visible-24.png" alt=""></button>
          </div>
       </div>`);
  
}

function traerDatos() {
  $.ajax({
    url: "data/datos.json",
  }).done(function (data) {
    // console.log(data);

    distribuirDatos(data);

    let totalArquitectura = calcularMonto(arquitectura);
    let totalAguaCloaca = calcularMonto(aguaCloaca);
    let totalVialidad = calcularMonto(vialidad);
    console.log(totalAguaCloaca)



  crearTarjetas("Arquitectura", arquitectura, totalArquitectura, "https://img.icons8.com/ios/50/null/city.png"  );
  crearTarjetas("Vialidad", vialidad, totalVialidad, "https://img.icons8.com/material-outlined/48/null/road.png" );
  crearTarjetas("Agua y Cloacas", aguaCloaca,totalAguaCloaca, "https://img.icons8.com/fluency-systems-regular/48/null/plumbing.png");

  });


}


$( document ).ready(function() {
//  setTimeout(()=> traerDatos(), 1000 ) 
traerDatos();
});

$("body").on("click", ".btn-ver", (e)=>{


if(e.currentTarget.id == "btn-vialidad"){
  console.log("Vialidad")
  $("#vialidad").attr("src","img/icons8-ocultar-24.png");
} else if(e.currentTarget.id == "btn-agua y cloacas"){
  console.log(("Agua y cloacas"));
  $("#agua y cloacas").attr("src","img/icons8-ocultar-24.png");
}else if(e.currentTarget.id == "btn-arquitectura"){
  console.log("Arquitectura")
  $("#arquitectura").attr("src","img/icons8-ocultar-24.png");
}
})