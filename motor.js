const llamadaApi="http://prueba.triunfon.es/index.php/posts";


function llamar(){
    const fila=document.querySelector(".datos");

    fetch(llamadaApi)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        fila.innerHTML="";
        for (let x = 0; x < data.length; x++) {
            fila.innerHTML+=`<div class="registro">${data[x].id} ${data[x].oferta} ${data[x].tipo}`;
            
        }
            
        
    })

}