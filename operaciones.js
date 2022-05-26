
window.addEventListener('load', function() {
   agregarClienteOperando();
   
})

    const botonCerrarSesion = document.getElementById("cerrarSesion");
    botonCerrarSesion.addEventListener("click", cerrarSesion);


    function cerrarSesion(){
    window.location.href = "index.html"
    localStorage.clear();
}


function agregarClienteOperando(){ //Agrega datos de Cliente ingresado al enlace.html

    const clienteLocal = JSON.parse(localStorage.getItem('cliente'));
    const nombre = document.querySelector('#nombreCliente');
    const imagen = document.querySelector('#imagenCliente');
    nombre.innerHTML = clienteLocal.nombre;
    imagen.src= clienteLocal.imagen;

    const clienteLocalActual = JSON.parse(localStorage.getItem("cliente")).saldo;
    const saldoOperacion = parseInt(clienteLocalActual) + 0;
    console.log(saldoOperacion);
    const saldoActual =  localStorage.setItem("saldo", saldoOperacion);
    console.log(saldoActual);
    
    const actual = localStorage.getItem("saldo");
    console.log(actual);
    alert("Saldo $" + localStorage.getItem("saldo"));

}


    const botonDepositar = document.getElementById("depositar");
    botonDepositar.addEventListener("click", depositar )

    function depositar(){ //FUNCION DEPOSITAR

           
    const agregaDeposito = parseInt(document.getElementById("depositarDinero").value);  
    console.log(agregaDeposito);

    const saldoActual = parseInt(localStorage.getItem("saldo"));
    console.log(saldoActual);

    const operacion = parseInt(saldoActual + agregaDeposito );
    console.log(operacion);


    const depositoActual =   localStorage.setItem("saldo", operacion);
    console.log(depositoActual);
    

    if( operacion>10 && operacion <990){
        const depositoActual =   localStorage.setItem("saldo", operacion);
        console.log(depositoActual);
        alert("su saldo es " + operacion);
            
    }
    else{
            alert("cantidad no valida por regla de negocio, mayora 990")  
        }
    }


    const botonRetirar = document.getElementById("retirar");
    botonRetirar.addEventListener("click", retirar );

    function retirar(){ //FUNCION RETIRAR
 
    const agregaRetiro = parseInt(document.getElementById("retirarDinero").value);  
    console.log(agregaRetiro);
 
    const saldoActual = parseInt(localStorage.getItem("saldo"));
    console.log(saldoActual);

    const operacion = parseInt(saldoActual - agregaRetiro );
    console.log(operacion);

 
    if( operacion>9){
    const retiroActual =   localStorage.setItem("saldo", operacion);
    console.log(retiroActual);
    setTimeout( function() { alert("su saldo es " + operacion); }, 10 );
    }
    else{
    alert("cantidad no valida por regla de negocio, menor a 10")
    }
}

//Estaré actualizando validaciones